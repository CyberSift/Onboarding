## Description and Explanation of Anomalies Detected by CyberSift

### Windows Event Logs

| Anomaly Name | Description
| - | - |
| <a id="AbnormalLogin"></a> **AbnormalLogin** | Detects if a subject user account has logged into the target computer which has not been used by said user in the past 7 days 
| <a id="AbnormalUser"></a> **AbnormalUser** | Detects a user account is still active after being disabled / deleted. Works using Windows event ID: 4725, 4726 & 4722
| <a id="AbnormalProcess"></a> **AbnormalProcess** | Detects if a process has been launched which has not been seen before. Works using Windows Sysmon (any event with an "Image" entry such as DNS, Network, file creation events, etc).
| <a id="AbnormalService"></a> **AbnormalService** | Detects if a subject user account has logged into a domain service which they have not used in the recent past (approx last 7 days). Works using Windows event ID: 4769.
| <a id="AbnormalServiceTime"></a> **AbnormalServiceTime** | Detects if a subject user account has logged into a domain service at a time which is significantly different from what is usual for that user. Works using Windows event ID: 4769.
| <a id="AbnormalServiceSet"></a> **AbnormalServiceSet** | Detects if a user account has accessed an unusual "Service Set" within one login session. A "Service Set" is a list of unique Windows Domain services (e.g. kerberos services) that a user typically accesses. Works using Windows event ID: 4769.
| <a id="anomalous_sequence"></a> **anomalous_sequence** | Detects an unusual sequence of events in the Windows Event Logs. This check is applied to each domain computer individually, currently for the 'Application' and 'System' event logs
| <a id="rare_event"></a> **rare_event** | Detects a rare event which doesn't match any learned templates for Windows Event Logs. This check is applied to each event message individually, currently for the 'Application' and 'System' event logs
| <a id="Winlog_Volume_Anomaly"></a> **Volume_Anomaly** | Detects an unusual spike or dip in the number of events in the Windows Event Logs. This check is applied to each unique Event ID.
| <a id="FileDelete_Volume_Anomaly"></a> **FileDelete\_Volume\_Anomaly** | Detects an unusual spike in the number of files deleted by a user in the Windows Event Logs. This check is applied to each user name. Works using Windows event ID: 4663
| <a id="FileRead_Volume_Anomaly"></a> **FileRead\_Volume\_Anomaly** | Detects an unusual spike in the number of files read or accessed by a user in the Windows Event Logs. This check is applied to each user name. Works using Windows event ID: 4663
| <a id="AbnormalFileShareAccount"></a> **AbnormalFileShareAccount** | Detects a user account accessing a file share which they have not recently accessed (approx. in the past 30 days). Works using Windows event ID: 5140
| <a id="AbnormalFileShareHost"></a> **AbnormalFileShareHost** | Detects a host machine accessing a file share which it does not usually access (approx. in the past 30 days). Works using Windows event ID: 5140

... more coming soon ...

### Network Connection Logs

| Anomaly Name | Description
| - | - |
| <a id="Known_Threat"></a> **Known_Threat** | Detects a connection whose Destination IP Address is present in our threat intelligence provider database. Typicaly these IP addresses would have been observed as active in some malware, cryptomining or phishing campaign. Seeing this alert present in your network does not always mean an active intrusion. Due to the shared nature of today's Internet infrastructure it is quite common to see common IP addresses such as Google's popular DNS service 8.8.8.8 being listed in threat intelligence feeds.
| <a id="Network_Volume_Anomaly"></a> **Volume_Anomaly** | Detects an unusual spike or dip in the number of events in the network connection logs. This check is applied to each unique Source Address.
| <a id="SVM_Anomaly"></a> **SVM_Anomaly** | Detects an unusual connection that doesn't fit in with previously seen behaviour. This anomaly is a result of CyberSift's ML algorithms. An [SVM (Support Vector Machine)](https://en.wikipedia.org/wiki/Support-vector_machine) is one of the ML algorithms that CyberSift uses in it's ensemble. An ensemble is a group of ML algorithms working together to classify anomalies. The SVM_Anomaly tag has persisted for historical and compatiblity reasons (as opposed to using the more proper "ensemble_anomaly" tag). A connection can be flagged as anomalous for a number of reasons such as the number of IP addresses contacted, the amount of bytes transferred, and so on. Use the other fields in the logs as well as visualizations to help you determine if the anomaly is a true positive.

... more coming soon ...

### DNS Query Logs

| Anomaly Name | Description
| - | - |
| <a id="Rareness_Anomaly"></a> **Rareness_Anomaly** | Detects an unusual DNS request, one that is made relatively rarely over the past approx. 30 days

... more coming soon ...