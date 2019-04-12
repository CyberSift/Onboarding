## Microsoft Azure cloud CyberSift deployment

* Access the Azure Portal

* In the menu - upper left corner, click on “ + Create a resource “

* In the search box, type in “Template deployment"

![image1](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image1.png?raw=true)

* Click on the “template deployment” result, and click on the “Create” button

![image2](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image2.png?raw=true)

* Click the “Build your own template in the editor” option

![image3](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image3.png?raw=true)

* In the editor, copy and paste the text from the following link: https://csinstallscripts.blob.core.windows.net/azure-templates/CS_template.json

![image4](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image4.png?raw=true)

* Click on the save button

* Click on the edit icon to “Edit parameters


![image5](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image5.png?raw=true)

* Delete the existing text within the editor, and instead copy/paste the contents of the following link: https://csinstallscripts.blob.core.windows.net/azure-templates/CS_parameters.json


![image6](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image6.png?raw=true)

* Click on save. The settings boxes should now be populated for you. Please review them, paying special attention to:
    - The resource group where you’d like to place the server
    - The location of the server
    - The admin username
    - Set the admin password


![image7](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image7.png?raw=true)

* Once the details are updated appropriately, agree to the Terms And Conditions, and finally click “Purchase”

![image8](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image8.png?raw=true)

* Azure will kick off the deployment (this will take a while to complete):

![image9](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image9.png?raw=true)

* Once this is done, a find the resource group just created and make a note of the public IP of the newly created Virtual Machine. You can access the UI via http://**YOUR_PUBLIC_IP**/

* **Please note:** it’s recommended to delete the firewall rule allowing HTTP access and instead use more secure means of communication such as VPN or SSH Tunnels

* The SSH management port for the VM has been changed to **2224**, so any future ssh connections should be made to this port rather than the default port 22 (which is now being used by a honeypot).