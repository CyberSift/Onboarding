## Description and Explanation of Anomalies Detected by CyberSift

### Windows Event Logs

| Anomaly Name | Description
| - | - |
| <a id="AbnormalLogin"></a> **AbnormalLogin** | Detects if a subject user account has logged into the target computer in the past 7 days 
| <a id="AbnormalServiceSet"></a> **AbnormalServiceSet** | Detects if a user account has accessed an unusual "Service Set" within one login session. A "Service Set" is a list of unique Windows Domain services (e.g. kerberos services) that a user typically accesses 
| <a id="anomalous_sequence"></a> **anomalous_sequence** | Detects an usual sequence of events in the Windows Event Logs. This check is applied to each domain computer individually, currently for the 'Application' and 'System' event logs
| <a id="Volume_Anomaly"></a> **Volume_Anomaly** | Detects an usual spike or dip in the number of events in the Windows Event Logs. This check is applied to each unique Event ID.

### Network Connection Logs

... coming soon ...