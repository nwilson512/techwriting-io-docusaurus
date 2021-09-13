---
title: 'Clone this site into your local development environment'
type: task
---

<!--  For demonstration only, these steps have not yet been verified -->

If you're not installing a new Statamic site, but instead cloning an existing site from a GitHub repository, your Statamic installation and configuration steps will be different from a standard install.

**Perform the following steps to clone a website from an existing repository and configure Statamic:**

1. Install the Statamic CLI:

  ```
  composer global require statamic/cli
  ```

2. In your `Sites` folder, run the Valet Park command:

  ```
  cd ~/Sites

  valet park
  ```

    :::note
    NOTE: If you need to move your website folder under a new directory in the future, use the 'valet forget' command in the 'Sites' directory to "unpark" the directory.
    :::

3. Clone your existing Statamic site into your `Sites` directory:

    ```
    git clone https://github.com/userName/repoName.git
    ```

4. Verify your site by navigating to your folder's name in your browser. For example, if your folder name is "examplesite", navigate to "examplesite.test":

    ![browser bar image](/img/verifySiteName.png)

    :::note
    <p>NOTE: If you receive a 403 "Access Forbidden" error when attempting to view your site, try the following troubleshooting steps:</p>

    <ol>
    <li>
    Stop apache: <br/>
    <code>sudo apachectl stop</code>
    </li>
    <li>
    Restart Valet: <br/>
    <code>valet restart</code>
    </li>
    </ol>


    <p>Consider disabling the Apache daemon if this error persists over reboots.</p>
    :::

5. Increase your php memory limits:

  1. Open the `php-memory-limits.ini` configuration file using a text editor:

      ```
      atom /usr/local/etc/php/7.3/conf.d/php-memory-limits.ini
      ```

  2. Find the
      ```
      ; Max memory per instance
      memory_limit = 128M
      ```
  configuration value, and change it to:

      ```
      ; Max memory per instance
      memory_limit = 256M
      ```

6. Change your php timezone:

  1. Open the `php.ini` configuration file using a text editor:

      ```
      atom /usr/local/etc/php/7.3/php.ini
      ```

  2. Comment out or delete the default value under `[Date]`, and add your own [timezone](https://www.php.net/manual/en/timezones.america.php):

      ```
      [Date]
      ; Defines the default timezone used by the date functions
      ; http://php.net/date.timezone
      date.timezone = America/Los_Angeles
      ```

7. Restart Valet:

    ```
    valet restart
    ```

{{# It may not be necessary to run the installer from a cloned site #}}

8. In your browser, run the Statamic installer by navigating to:

    ```
    http://your_site.test/installer.php
    ```

<!-- For demonstration only, these steps have not yet been verified -->
