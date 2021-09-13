---
title: 'Configure PHP'
type: task
---

[← Back to landing](/writing-samples/create-a-statamic-web-server-on-google-cloud-platform)

1. Increase your php memory limits:

  1. Open the `php-memory-limits.ini` configuration file using vim:

      ```
      vim /usr/local/etc/php/7.3/conf.d/php-memory-limits.ini
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

2. Change your php timezone:

  1. Open the `php.ini` configuration file using a text editor:

      ```
      vim /usr/local/etc/php/7.3/php.ini
      ```

  2. Comment out or delete the default value under `[Date]`, and add your own [timezone](https://www.php.net/manual/en/timezones.america.php):

      ```
      [Date]
      ; Defines the default timezone used by the date functions
      ; http://php.net/date.timezone
      date.timezone = America/Los_Angeles
      ```

[← Back to landing](/writing-samples/create-a-statamic-web-server-on-google-cloud-platform)
