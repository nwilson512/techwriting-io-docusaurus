---
title: 'Clone your repository into your web server'
type: task

prev-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/add-github-access-to-your-vm
  title: Add GitHub access to your VM
next-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/configure-apache
  title: Configure Apache
---

Once you've added your web server's key to GitHub, you can clone and pull from the repository onto your webserver. By default, the Debian operating system includes the Apache webserver, and these instructions use Apache to serve your website to visitors.

**Perform the following steps to clone the repository containing your Statamic website into your web server:**

1. If you have not already done so, start an SSH session with your GCP VM:

    ```
    ssh user@yourVmIp
    ```

2. Clone your Statamic repository into the webroot, typically: "/var/www/html/", directory of your server:

    ```
    cd /var/www/html/

    git clone git@github.com:exampleUser/exampleRepo.git
    ```

    :::caution
    You must use SSH syntax to clone a repository using a deploy key, HTTP syntax is unsupported.
    :::

Once complete, validate the clone operation by checking the folders under webroot. They should appear exactly as they do in your repository:

```
/var/www/html/exampleSite/
  ↳ assets/
  ↳ local/
  ↳ site/
  ↳ statamic/
  ↳ sample.htaccess
  ↳ index.php
  ↳ ..etc
```

