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
| <a id="anomalous_sequence"></a> **anomalous_sequence** | Detects an usual sequence of events in the Windows Event Logs. This check is applied to each domain computer individually, currently for the 'Application' and 'System' event logs
| <a id="Volume_Anomaly"></a> **Volume_Anomaly** | Detects an usual spike or dip in the number of events in the Windows Event Logs. This check is applied to each unique Event ID.
| <a id="FileDelete_Volume_Anomaly"></a> **FileDelete_Volume_Anomaly** | Detects an usual spike in the number of files deleted by a user in the Windows Event Logs. This check is applied to each user name. Works using Windows event ID: 4663
| <a id="FileRead_Volume_Anomaly"></a> **FileRead_Volume_Anomaly** | Detects an usual spike in the number of files read or accessed by a user in the Windows Event Logs. This check is applied to each user name. Works using Windows event ID: 4663

... more coming soon ...

### Network Connection Logs

| Anomaly Name | Description
| - | - |
| <a id="Volume_Anomaly"></a> **Volume_Anomaly** | Detects an usual spike or dip in the number of events in the network connection logs. This check is applied to each unique BGP ASN.

... more coming soon ...