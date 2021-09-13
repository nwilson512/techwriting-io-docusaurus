---
title: 'Create a key and add it to GCP'
type: task

prev-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-google-cloud-platform-compute-engine-instance
  title: Create a Google Cloud Platform Compute Engine instance
next-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/install-web-server-dependencies
  title: Install web server dependencies
---

<!-- Web servers and GCP Compute Instances are networked at the IP level. This means that when you create a VM, it will be assigned an internal IP address, as well as a temporary public IP address. You can use the public IP address to connect to it  -->

<!-- Access to your VM is secured using something called the **AAA** network model. The **AAA** network model breaks down as:

* Authentication
* Authorization
* Accounting -->

Your VM authenticates with other components through encrypted key pairs. Before you can connect to your VM from outside your cloud console, you must create and associate a key that identifies you.

You can manage your keys on GCP in one of two ways: you can use the [OS Login](https://cloud.google.com/compute/docs/oslogin/) Google service, or you can manage keys manually in the project metadata [manually](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).

:::note
CAUTION: I strongly recommend following Google's advice and using [OS Login](https://cloud.google.com/compute/docs/oslogin/) for production servers.
:::

**Perform the following steps to create a key pair and manually add a key to a GCP Project:**

1. Generate an RSA key pair, these examples use the default name:

    ```
    ssh-keygen -t rsa
    ```

    This creates a public/private key pair, named "id_rsa" and places it in a hidden key directory on your computer.

2. Change directories to your key directory:

    ```
    cd ~/.ssh
    ```

3. Using a text editor, copy the **public** key contents from "id_rsa.pub":

    ```
    atom id_rsa.pub
    ```

3. Navigate to the compute engine page of your GCP console:

    ![](/img/gcpComputeEngine.png)

4. Select **Metadata** from the navigation bar on the left side of the screen:

    ![](/img/gcpMetadata.png)

5. Select **SSH Keys**, then select the **Edit** button:

    ![](/img/gcpSshEdit.png)

7. Select **+ Add item**:

   ![](/img/gcpAddItem.png)

8. Paste your public key into the key text field in the Google Cloud console:

    ![](/img/gcpPaste.png)

    :::note
    This process manually assigns fixed key access. I strongly recommend rotating your keys on a planned interval as part of your security policies.
    :::

9. Ensure your public key was properly added by connecting to your VM using secure shell (SSH):

    ```
    ssh username@serverIP
    ```




_Citation note:_ I referenced the linked Google production documentation when I wrote this page, specifically the articles: [OS Login](https://cloud.google.com/compute/docs/oslogin/) and [Managing SSH keys in metadata](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys). In production doc, I would simply link to this documentation. However, this is a writing exercise, and I've documented my own steps for sample purposes.
