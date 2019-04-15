## Sending netflow data to CyberSift

**TL;DR** : Download and modify the **[NiFi templates located here](https://gist.github.com/dvas0004/ea4c3d89e7bb78e653193b37f4275f9e)** to setup Netflow ingestion, but first install NFDUMP on the CyberSift Server

The CyberSift installation comes pre-packaged with an [Apache NiFi](https://nifi.apache.org/) instance - by default you can access this on **http://YOUR_CYBERSIFT_IP:9900/nifi** after modifying your firewall rules appropriately. 

Nifi can be used for a variety of tasks - in CyberSift's context these tasks are primarily related to data ingestion. In combination with another open source tool we can use NiFi to send Netflow data to CyberSift.

First, we need to setup a netflow collector which will receive netflow data from around your network. This is the job of NFcapd and NFdump. Installation on CyberSift is quite straightforward:

```bash
yum -y install nfdump
mkdir -p /var/cache/nfdump
nfcapd -w -D -B 1024000 -l /var/cache/nfdump/ -p 9995

echo 'nfcapd -w -D -B 1024000 -l /var/cache/nfdump/ -p 9995' >> /etc/rc.local
```

The above will install netflow collector tools and start a netflow collector listening on port **9995**, and sets it to auto-start on boot. At this point you can configure your networking devices to start sending netflow to <YOUR_CYBERSIFT_IP : 9995>, and you should start seeing the */var/cache/nfdump/* directory starting to get populated with files:

```bash
[root@CS-Demo nfdump]# pwd
/var/cache/nfdump
[root@CS-Demo nfdump]# ls
nfcapd.201904121750  nfcapd.current.23058
```

Once at this stage, we now need to setup NiFi to monitor this directory and import and new data into CyberSift's Elasticsearch node. Our CTO David wrote a detailed blog post about this in the below link, which is recommended reading:

* **[Consuming Netflow using NiFi](http://blog.davidvassallo.me/2019/04/09/consuming-netflow-using-nifi/)**

A full template for importing Netflow into CyberSift is provided in the link below (*please note that CyberSift expects to find certain fields present in the documents provided to ElasticSearch [as documented here](https://gettingstarted.cybersift.io/docs/ip_required_fields.md), the template provided below takes this into consideration*):

* [Template Link](https://raw.githubusercontent.com/CyberSift/Onboarding/master/docs/templates/Netflow_To_ES.xml) (right-click to "Save As")

![NIFI_NETFLOW](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/nifi_netflow.png?raw=true)
