---
title: 'Create a new virtual host configuration'
type: task

prev-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/configure-apache
  title: Configure Apache
---

In Apache, the virtual host file allows you to specify multiple configuration parameters using individual configuration files which can then be selectively activated and deactivated when necessary. Since your installation uses a largely default configuration, your configuration file will not require much modification.

**Perform the following steps to create and activate a new virtual host configuration file for your Statamic site:**

1. In the terminal, change to the sites available directory:

    ```
    cd /etc/apache2/sites-available
    ```

2. Create a new virtual host configuration file for your Statamic site by copying the "000-default.conf" file. There isn't a strict naming requirement, but I recommend giving it the same name as your project folder:

    ```
    cp 000-default.conf exampleSite.conf
    ```

3. Using VIM, open your new .conf file:

    ```
    sudo vim exampleSite.conf
    ```

4. Append your site directory to the "DocumentRoot: /var/www/html/" configuration parameter:

    ```
    DocumentRoot: /var/www/html/exampleSite/
    ```

5. Save your configuration file with the following keystrokes:
  * `:w`
  * `:q`
  * `ENTER`

6. Enable your virtual host file using the `a2ensite` command:

    ```
    sudo a2ensite exampleSite.conf
    ```

7. Validate your configuration file by running the `apachectl` command with the `-t` option to check for syntax errors:

    ```
    sudo apache2ctl -t
    ```

8. Restart Apache to apply the new configuration:

    ```
    sudo apache2ctl restart
    ```
