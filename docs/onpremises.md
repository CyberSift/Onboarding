## On premises CyberSift deployment

1. Install a base image of CentOS 7. This depends on your setup, however there are quite a number of tutorials available online, for example: 

[Youtube tutorial: How to Install CentOS 7 on VirtualBox in Windows 8 / Windows 10](https://www.youtube.com/watch?v=A-VZwc-0Y1M)

2. Open an ssh shell to the virtual machine and execute the following command as **root**:

```bash
# the below command is a single line

curl -o install_cybersift.sh https://csinstallscripts.blob.core.windows.net/install-scripts/install_cybersift.sh && chmod +x install_cybersift.sh && ./install_cybersift.sh onsite debug
```

3. After installation, the web UI should be available over HTTP. 

4. The SSH management port has been changed to **2224**, so any future ssh connections should be made to this port rather than the default port 22(which is now being used by a honeypot).