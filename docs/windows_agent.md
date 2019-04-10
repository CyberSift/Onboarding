## Sending network connections to CyberSift via a Windows Agent


- Network Data collected directly from Windows Hosts

This is the easiest option to get started. You can download an install the CyberSift windows agent from here:

https://csinstallscripts.blob.core.windows.net/install-scripts/Install_CS_Agent.exe

This will install an agent which sends back logs regarding connections the Windows PC makes back to CyberSift’s ElasticSearch. The installer should guide you through setup, asking you for the CyberSift server's IP address and the port number. 

Just remember that the default ElasticSearch port is **9200** (Azure users recall that this port is not open by default on your resource group firewall). 

-------------------

 **Make sure the port 9200 is not publicly open.**
 
-------------------