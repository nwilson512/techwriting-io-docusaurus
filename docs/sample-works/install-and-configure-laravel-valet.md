---
title: 'Install and configure Laravel Valet'
type: task
---

Before you can do any local development, or even install Statamic, you must install and configure [Laravel Valet](https://laravel.com/docs/5.8/valet#introduction).

The instructions in this topic expand on the Valet installation instructions to include Mac-specific instructions and troubleshooting tips.

**Perform the following steps to install Valet:**

1. Install the Homebrew package manager for Mac:

  1. On your Mac, open the terminal application:
    1. Press the `⌘`+ `space` keys to open the Spotlight Search bar
    2. type `terminal` and press the `enter` key to open the terminal app

  2. Input the [Homebrew](https://brew.sh) install command:

      ```
      /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      ```

  Homebrew should now be installed, refer to the terminal output to troubleshoot any errors.

2. Install packages:

  1. Using the Homebrew package manager, install PHP. From the terminal application, input:

      ```
      brew install php@7.3`
      ```

  2. [Install Composer](https://getcomposer.org/download/).

    1. Composer has asked that the install command not be distributed, the following example lists only the beginning characters. From the terminal application, input the full command that begins with:

      ```
      php -r "copy(...
      ```

    2. [Configure Composer to run globally](https://getcomposer.org/doc/00-intro.md#globally):

      ```
      mv composer.phar /usr/local/bin/composer
      ```

    3. Set a PATH variable for composer. This example does so using a bash profile:

      1. Open the bash profile with a text editor:

          ```
          atom ~/.bash_profile
          ```

      2. Add the following line to the bash profile:

          ```
          export PATH="$HOME/.composer/vendor/bin:$PATH"
          ```

      3. save it

    :::note
    NOTE: If you have any dependencies installed outside of Homebrew, you’ll need to manually remove them, then reinstall them through Homebrew.
    :::

  3. Install Valet dependencies using Composer:

      ```
      compose global require laravel/valet
      ```

  4. Install Valet:

      ```
      valet install
      ```

        :::note
        <p>NOTE: If you have trouble installing the dnsmasq dependency, or experience connection time-outs when attempting to ping a .test domain, try entering the following commands in order:</p>

        <ol>
          <li><code>
            brew unlink dnsmasq
          </code></li>
          <li><code>
            brew install dnsmasq
          </code></li>
          <li><code>
            brew prune
          </code></li>
          <li><code>
            brew link dnsmasq
          </code></li>
        </ol>
        :::
