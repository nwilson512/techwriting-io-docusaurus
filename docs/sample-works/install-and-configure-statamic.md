---
title: 'Install and configure Statamic'
---

Once you've installed and configured Laravel Valet for your local development environent, you're ready to install and configure Statamic itself.

The instructions in this document expand on the Statamic installation documentation to include Mac specific installation and configuration instructions.

**Perform the following steps to install and configure Statamic:**

1. Install the Statamic CLI:

    ```
    composer global require statamic/cli
    ```

2. In your `Sites` folder, run the Valet Park command, then create a new project using the Statamic CLI:

  ```
  cd ~/Sites

  valet park

  statamic new site_name
  ```

    :::note
    NOTE: If you need to move your website folder under a new directory in the future, use the 'valet forget' command in the 'Sites' directory to "unpark" the directory.
    :::

3. Verify your site by navigating to the "site_name.test" URL in your browser

    :::note
    NOTE: If you receive a 403 "Access Forbidden" error when attempting to view your site, try the following troubleshooting steps:


    1. Stop apache:
        
        ```
        sudo apachectl stop
        ```

    2. Restart Valet:
        
        ```
        valet restart
        ```

    Consider disabling the Apache daemon if this error persists over reboots.
    :::

4. Increase your php memory limits:

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
      memory_limit = 256M`
      ```

5. Change your php timezone:

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

5. Restart Valet:

    ```
    valet restart
    ```

6. In your browser, run the Statamic installer by navigating to:

    ```
    http://your_site.test/installer.php
    ```
