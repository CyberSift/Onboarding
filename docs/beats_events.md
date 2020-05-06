## Sending Elastic "Beats" events to CyberSift

Elastic provides various "beats" which can gather data from various sources such as files (filebeat), windows event logs (winlogbeat) and others. The default beats however, do not currently have the option to define seperate indices the source should go to within the same configuration file. 

As a concrete example, imagine a scenario where you would like a server to send logs from `/var/log/system.log` to the **system** index and `/var/log/apache2/*` to the **apache** index.

With the default setup, you either need to run seperate beat instances, or use logstash to seperate the events into the appropriate index. 

CyberSift provides an arguably easier alterntive to do this, as follows:

1. Follow standard beat configuration to setup [multiple prospectors](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-input-log.html#multiple-prospectors). If we consider our example above, then the filebeat.yml would look similar to:

```
filebeat.inputs:
- type: log 
  paths:
    - /var/log/system.log
  fields:
    csIndex: system
- type: log 
  paths:
    - "/var/log/apache2/*"
  fields:
    csIndex: apache
  ```

Note the addition on the **csIndex** field, with the name of the appropriate index we'd like to send the logs to. The value of csIndex can be any index you would like the source's events to end up in. So for example, a value of "apache" would place events in the temporal index "apache-2020.01.29", "system" in the index "system-2020.01.29" and so on. 

**Note:** some values have special meaning to CyberSift, since we provide various context addition and machine learning for certain sources like Windows Event logs or Linux Auditbeat logs. In this case, setting the fields to a specific value is required ("winlogbeat", and "auditbeat" respectively in this case)

2. Configure **redis** output for the beat. Beats support pushing events to a redis list - optionally even encrypted. CyberSift has a dedicated redis instance for just this purpose. Port **6377** listens for unencrypted events, while port **6378** accepts encrypted events. So our configuration would have:

```
output:
  redis:
        enabled: true
        codec.json:
          pretty: false

        hosts: ["w.x.y.z:6377"]
        key: cybersift_events        
```

And similarly for encrypted:

```
output:
  redis:
        enabled: true
        codec.json:
          pretty: false

        hosts: ["w.x.y.z:6378"]
        key: cybersift_events
        ssl.enabled: true
        ssl.certificate_authorities: ["/var/demo/ca.pem"] # appropriate CA certificate required
        ssl.verification_mode: none # ideally this should be set to "full"
```

Note the "key" field. This can be anything you wish, as long as it matches the settins configured in NiFi later (see below)

**Optional Performance Tip:** setting up different "keys" per beat will allow CyberSift to process incoming events in parallel. 

3. Setup NiFi flow. This is quite simple. Use the "GetRedisList" processor provided by CyberSift, and the NiFi standard "PutElasticsearchHttp" processor. A sample flow would look similar to:

![NIFI_BEATS](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/beats_flow.png?raw=true)

- The "GetRedisList" settings can be left as per default
- For PutElasticsearchHttp:
   - Set **"Identifier Attribute"** to `es_id`
   - Set **"Index"** to `${es_index}`
   - Set **"Type"** to `_doc`