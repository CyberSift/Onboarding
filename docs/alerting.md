## Setting up email alerts

***TL;DR** : Download and modify the **[NiFi templates located here](https://gist.github.com/dvas0004/3fd0e7c24c6d06f5095471e7b72b329b)** to setup email alerts*

The CyberSift installation comes pre-packaged with an [Apache NiFi](https://nifi.apache.org/) instance - by default you can access this on **http://YOUR_CYBERSIFT_IP:9900/nifi** after modifying your firewall rules appropriately. 

Nifi can be used for a variety of tasks - in CyberSift's context these tasks are primarily related to data ingestion. However, we can also use it to build a flexible pipeline to monitor for events which are alerted upon. In this blog post, our CTO David explains in more detail how to set this up and provides ready-made NiFi templates you download and use for your own purposes:

* **[Is it Elastalert? No – it’s NiFi!!](http://blog.davidvassallo.me/2019/04/11/is-it-elastalert-no-it-is-nifi/)**