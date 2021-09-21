---
title: 'Configure Apache'
type: task

prev-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/clone-your-repository-into-your-web-server
  title: Clone your repository into your web server
next-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-new-virtual-host-configuration
  title: Create a new virtual host configuration
---

Statamic is capable of being served from many different web servers, most notably, Apache and NGINX. Debian includes a running Apache web server by default, so this document provides instructions for Apache only.

**Perform the following steps to configure Apache on Debian to serve your Statamic site:**

1. If you have not already done so, start an SSH session with your GCP VM:

    ```
    ssh user@yourVmIp
    ```

2. Change to your webroot directory. The default webroot in Apache is `/var/www/html/`:

    ```
    cd /var/www/html/
    ```

3. Delete the default index page:

    ```
    sudo rm -rf index.html
    ```

4. Change to your site directory:

    ```
    cd /var/www/html/yourSiteName
    ```

5. Modify permissions, allowing the Apache "www-data" user to properly access and make changes to your website files:

    ```
    sudo chown -R www-data:www-data site local statamic assets
    ```

6. Enable the sample "htaccess" file by removing the sample prefix:

    ```
    mv sample.htaccess .htaccess
    ```

7. Enable url rewriting:

    ```
    sudo a2enmod rewrite
    ```

8. Restart Apache:

    ```
    systemctl restart apache2
    ```

  <!--  or is it: sudo apache2ctl restart ?-->
