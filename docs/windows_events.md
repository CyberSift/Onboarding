## Sending Windows Event logs to CyberSift

The easiest way of collecting windows events is to use the in built Microsoft "Windows Event Forwarding", as described here:

* [The Windows Event Forwarding Survival Guide](https://hackernoon.com/the-windows-event-forwarding-survival-guide-2010db7a68c4)
* [Use Windows Event Forwarding to help with intrusion detection](https://docs.microsoft.com/en-us/windows/security/threat-protection/use-windows-event-forwarding-to-assist-in-intrusion-detection)

This will allow you to use Group Policy to instruct all machines in your domain to send their event logs to a central server. You can then install winlogbeat on just one server.

Should that not be a valid deployment option, you can always deploy winlogbeat on every machine you'd like to monitor.

Insturctions for installing and deploying winlogbeat can be found here:

[Winlogbeat Getting Started](https://www.elastic.co/guide/en/beats/winlogbeat/6.3/winlogbeat-getting-started.html)

**Please note**: there is no need to perform Step 3 in the above link (*Configure Winlogbeat to use Logstash*). In CyberSift's case, you can point Winlogbeat to the already installed Elasticsearch - so the Elasticsearch IP address is the same as your CyberSift server.