## Prerequisites for network connection data ingestion

CyberSift expects a certain pattern within your data.

For firewall traffic, the index must take the typical elasticsearch form of:

`filebeat-%{[beat.version]}-%{+yyyy.MM.dd}`

with beat.version being optional. Valid examples are:

* `filebeat-2017.04.19`
* `filebeat-6.3-2018.11.27`

Within filebeat documents, CyberSift expects to find the following fields (please note that the field names are CASE SENSITIVE):


| Field Name | Type | Description |
| :--------: | :--: | :---------: |
| @timestamp | date | The timestamp of the log entry |
| Type | string | This must be set to **TRAFFIC**, indicating to CyberSift that this is IP traffic |
| SourceAddress | string | The Source IP Address of the log entry |
| DestinationAddress | string | The Destination IP Address of the log entry |
| DestinationPort | integer | The Destination Port of the log entry |
| Bytes | integer | The amount of bytes transferred for this connection / log entry |
| IPprotocol | string | Must be set to **tcp** or **udp** *(please note: **case sensitive**)* |
| SourceDestinationTuple | string | A tuple in the form %{SourceAddress}:%{DestinationAddress}:%{DestinationPort}, eg *192.168.0.1:8.8.8.8:53* |