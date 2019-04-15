## Sending network connections syslog data to CyberSift

If your syslog data doesn't come from or doesnt match [a firewall supported by the CyberSift NiFi plugin](https://gettingstarted.cybersift.io/docs/syslog_parser.md), you can still ingest the data by defining your own GROK template. This document should serve as a template to get you started. 

* Start off by downloading the sample NiFi template [ from here: Template Link](https://raw.githubusercontent.com/CyberSift/Onboarding/master/docs/templates/Netflow_To_ES.xml) (right-click to "Save As")

* Once imported into NiFi, the above template should look similar to the below screenshot:

![nifi_other_syslog](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/nifi_other_syslog.png?raw=true)

Let's go through through each labelled step below:

1. **Enable Syslog Server**: this is where you can set the syslog port (usually 514) and protocol (usually UDP)

2. **Extract information using GROK**: this is where you define a GROK filter. GROK is a powerful, felxible way of extracting information from text. There are plenty of tutorials online, we suggest you familiarize yourself with GROK by reading the following:

   - [A Beginner’s Guide to Logstash Grok](https://logz.io/blog/logstash-grok/)
   - [How to Extract Patterns with the Logstash Grok Filter](https://qbox.io/blog/logstash-grok-filter-tutorial-patterns)
   - [Do you grok Grok?](https://www.elastic.co/blog/do-you-grok-grok)

*Pro Tip 1: do a quick google search before making your own GROK filter, chances are someone else already wrote a GROK filter for your firewall pattern*

*Pro Tip 2: if you do write your own pattern, use [Grok Debugger](https://grokdebug.herokuapp.com/)*

In the provided template, the GROK expression (modelled after a CISCO ASA syslog output) is the following:

```
<166>%{MONTH} +%{MONTHDAY}(?: %{YEAR})? %{TIME}: %%{GREEDYDATA:Serial}: access-list %{WORD:access_list_name} %{WORD:action} %{WORD:IPprotocol} %{WORD:InboundInterface}/%{IP:SourceAddress}\(%{NUMBER:SourcePort}\) -> %{WORD:OutboundInterface}/%{IP:DestinationAddress}\(%{NUMBER:DestinationPort}\) hit-cnt %{NUMBER:Bytes} %{GREEDYDATA:metadata}
```

Change this according to your needs. The **most important thing to note is the field names**. Your GROK filter **must** include the following fields names, [as documented here](https://gettingstarted.cybersift.io/docs/ip_required_fields.md):

* SourceAddress
* DestinationAddress
* DestinationPort
* IPprotocol

*the sharp-eyed among you will realise there's a couple of missing fields (like @timstamp or SourceDestinationTuple) - we'll get to that in a couple of steps*

3. **(Optional) Drop unwanted events** In general, networks tend to generate thousands of syslog entries. Depending on your requirements and resources available you may want to avoid certain events from being logged to CyberSift. In this template we used NiFi expression language to send all "permitted" connections to the permitted route, and we use only this route so that only permitted connections are acutally logged and used:

```${grok.action:equals('permitted')}```

*TIP: note how GROK extracted the "action" field and prepended it with "grok.", so the full name of the extracted field is actually "grok.action"*

4. **Add additional fields as expected by CyberSift**. In this step, we add the missing fields that we mentioned earlier in step 2. Once again we use NiFi expression language to augment the message with the required fields for indexing. *You typically wont need to change this.*

5. **(Optional) Add geographic data to your network traffic**. In this step, we translate IP addresses to geographical locations. *You typically wont need to change this.*

6. **Convert to JSON file**. The syslog file is converted into JSON in preperation for sending to ElasticSearch. *You typically wont need to change this.*

7. **Rename / remove some JSON fields for better ElasticSearch / CyberSift support**. In this step we modify the JSON file to change some field names to ensure compatibility with ElasticSearch / CyberSift. *You typically wont need to change this.*

8. **Insert into ElasticSearch**. The final JSON file is sent to ElasticSearch for indexing and further processing by CyberSift *You typically wont need to change this.*

That's it! Once you start the NiFi data flow, you should start seeing documents coming into ElasticSearch