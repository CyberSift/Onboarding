## Microsoft Azure cloud CyberSift deployment

0. Access the Azure Portal
1. In the menu - upper left corner, click on “ + Create a resource “
2. In the search box, type in “Template deployment"

![image1](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image1.png?raw=true)

3. Click on the “template deployment” result, and click on the “Create” button

![image2](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image2.png?raw=true)

4. Click the “Build your own template in the editor” option

![image3](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image3.png?raw=true)

5. In the editor, copy and paste the text from the following link: https://csinstallscripts.blob.core.windows.net/azure-templates/CS_template.json

![image4](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image4.png?raw=true)

6. Click on the save button
7. Click on the edit icon to “Edit parameters


![image5](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image5.png?raw=true)

8. Delete the existing text within the editor, and instead copy/paste the contents of the following link: https://csinstallscripts.blob.core.windows.net/azure-templates/CS_parameters.json


![image6](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image6.png?raw=true)

9. Click on save. The settings boxes should now be populated for you. Please review them, paying special attention to:
 - The resource group where you’d like to place the server
 - The location of the server
 - The admin username
 - Set the admin password


![image7](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image7.png?raw=true)

10. Once the details are updated appropriately, agree to the Terms And Conditions, and finally click “Purchase”

![image8](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image8.png?raw=true)

11. Azure will kick off the deployment (this will take a while to complete):

![image9](https://github.com/CyberSift/Onboarding/blob/master/public/img/docs/azure_deployment/image9.png?raw=true)

12. Once this is done, a find the resource group just created and make a note of the public IP of the newly created Virtual Machine. You can access the UI via http://**YOUR_PUBLIC_IP**/

13. **Please note:** it’s recommended to delete the firewall rule allowing HTTP access and instead use more secure means of communication such as VPN or SSH Tunnels