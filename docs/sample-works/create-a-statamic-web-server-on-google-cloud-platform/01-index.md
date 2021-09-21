---
title: 'Create a Statamic web server on Google Cloud Platform'
type: task
next-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-google-cloud-platform-compute-engine-instance
  title: Create a Google Cloud Platform Compute Engine instance
---

When you want to move into production, you'll need to create and run a web server. You have many different options when it comes to running statamic in a production environment, and some implementations are more complex than others.

The instructions in this document detail one such option: Creating a web server on Google Cloud Platform (GCP), and assume that you already have a GCP account.

:::note
These instructions require a paid account with Google Cloud Platform. Costs can add up quickly on cloud platforms, particularly with higher tier compute instances and other specialty services. Do not proceed unless you are already familiar and with comfortable with the costs of operating on a cloud provider.
:::

#### Prerequisites

In order to successfully follow the instructions in this document, you must meet the following prerequisites:

* An active Google Cloud Platform subscription
* A local Development environment running Mac OS
* A production-ready Statamic website
* A GitHub account

**Perform the steps in the following documents to create and run a Statamic web server on Google Cloud Platform:**

1. [Create a Google Cloud Platform Compute Engine instance](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-google-cloud-platform-compute-engine-instance)
2. [Create a key and add it to GCP](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-key-and-add-it-to-gcp)
3. [Install web server dependencies](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/install-web-server-dependencies)
<!-- 4. [Configure PHP](/samples/writing/configure-php) -->
5. [Add GitHub access to your VM](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/add-github-access-to-your-vm)
6. [Clone your repository into your web server](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/clone-your-repository-into-your-web-server)
7. [Configure Apache](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/configure-apache)
8. [Create a new virtual host configuration](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-new-virtual-host-configuration)
