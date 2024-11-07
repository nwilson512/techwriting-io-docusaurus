---
title: 'Add GitHub access to your VM'
type: task

prev-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/install-web-server-dependencies
  title: Install web server dependencies
next-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/clone-your-repository-into-your-web-server
  title: Clone your repository into your web server
---

Just as you added your development computer to your GitHub repo, you must also add your GCP VM to GitHub. To do this, generate a new key pair on your VM and establish the public key with your GitHub repository.

**Perform the following steps to generate a key pair on your GCP VM:**

1. If you have not already done so, start an SSH session with your GCP VM:

    ```
    ssh user@yourVMip
    ```

2. Generate a private key on your server. This command places a new key pair in the default location:

    ```
    ssh-keygen -t rsa
    ```

    In the Debian operating system, the default location is:

    ```
    /home/yourUserName/.ssh/id_rsa.pub
    ```

3. Exit your SSH session:

    ```
    exit
    ```

4. Download that public key file from your instance onto your local machine using SCP:

    ```
    scp -p user@yourVMip:/home/yourUserName/.ssh/id_rsa.pub id_rsa.pub
    ```
    :::note
    <ul>
    <li>
    The trailing “id_rsa.pub” determines what name your web server's public key file has on your local machine. You’ll also want to be in an appropriate directory when you issue the SCP command, it pulls it into your current directory.
    </li>
    <li>
    Some operating systems may hide and not display id_rsa.pub keys in file browsers. If you don't see your downloaded key, Techwriting.io recommends you check your directory location using the terminal command `ls`.
    </li>
    </ul>
    :::

**Add your VM public key to GitHub**

1. Navigate to your GitHub repository:

    ![](/img/deployKeyAddNavRepo.png)

2. Select "Settings":

    ![](/img/deployKeyAddSettingsPage.png)

3. Select "Deploy Keys" on the left menu:

    ![](/img/deployKeyAdd.png)

4. Open the public key you downloaded in the previous section of this documentation:

    ```
    atom id_rsa.pub
    ```

5. Copy the the key's text into the "Key" dialogue box, name your key, and select "Add key":

    <img class="imgOverrideTall" src="/img/deployKeyAddKeyText.png"/>


