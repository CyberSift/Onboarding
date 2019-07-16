## Description and Explanation of Anomalies Detected by CyberSift

### Windows Event Logs

| Anomaly Name | Description
| - | - |
| <a id="AbnormalLogin"></a> **AbnormalLogin** | Detects if a subject user account has logged into the target computer in the past 7 days 
| <a id="AbnormalProcess"></a> **AbnormalProcess** | Detects if a process has been launched which has not been seen before. Works using Windows Sysmon (any event with an "Image" entry such as DNS, Network, file creation events, etc).
| <a id="AbnormalService"></a> **AbnormalService** | Detects if a subject user account has logged into a domain service which they never have used before. Works using Windows event "audit success" (ID: 4769).
| <a id="AbnormalServiceTime"></a> **AbnormalServiceTime** | Detects if a subject user account has logged into a domain service at a time which is significantly different from what is usual for that user. Works using Windows event "audit success" (ID: 4769).
| <a id="AbnormalServiceSet"></a> **AbnormalServiceSet** | Detects if a user account has accessed an unusual "Service Set" within one login session. A "Service Set" is a list of unique Windows Domain services (e.g. kerberos services) that a user typically accesses. Works using Windows event "audit success" (ID: 4769).
| <a id="anomalous_sequence"></a> **anomalous_sequence** | Detects an usual sequence of events in the Windows Event Logs. This check is applied to each domain computer individually, currently for the 'Application' and 'System' event logs
| <a id="Volume_Anomaly"></a> **Volume_Anomaly** | Detects an usual spike or dip in the number of events in the Windows Event Logs. This check is applied to each unique Event ID.

### Network Connection Logs

... coming soon ...