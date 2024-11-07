---
title: 'Create a Statamic web server on Google Cloud Platform'
type: task
next-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-google-cloud-platform-compute-engine-instance
  title: Create a Google Cloud Platform Compute Engine instance
---

Once you've devloped and succesfully staged your Statamic website, you'll likely want to move into production. To do this, you'll need to create and run a web server. You have many different options when it comes to running Statamic in a production environment, and some implementations are more complex than others. The instructions in this document detail one such option: Creating a web server on Google Cloud Platform (GCP). This type of deployment is intended for hobbyists and casual users interested in expanding their understanding of GCP's infrastructure without the abstraction of services such as GKE.

### Architecture

Before you start deployment, you should consider how Statamic is deployed on GCP and understand its components. This manual deployment architecture bypasses GCP’s managed services entirely. Instead, it deploys on GCP Compute Engine instances directly for a virtual machine-based environment. By configuring a basic Compute Engine instance in this way, you’ll create a server with all the necessary dependencies to serve your Statamic site over the web. Here’s an overview of the components involved in this deployment:

* **GitHub repository**: Provides version control and stores the Statamic site’s source code
* **Compute Engine instance**: Hosts applications and manages requests from users
* **Statamic files**: The content management system (CMS) that powers the site
* **Apache web server**: Installed on the Compute Engine instance to handle HTTP requests and serve the Statamic site

![](/img/gcpArch.png)

### Prerequisites

In order to successfully follow the instructions in this document, you must meet the following prerequisites:

* An active Google Cloud Platform subscription
* A local Development environment running Mac OS
* A production-ready Statamic website
* A GitHub account

:::caution
These instructions require a paid account with Google Cloud Platform. Costs can add up quickly on cloud platforms, particularly with higher tier compute instances and other specialty services. Do not proceed unless you are already familiar and with comfortable with the costs of operating on a cloud provider.
:::

### Create a Statamic web server

Perform the steps in the following documents to create and run a Statamic web server on Google Cloud Platform:

1. [Create a Google Cloud Platform Compute Engine instance](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-google-cloud-platform-compute-engine-instance)
2. [Create a key and add it to GCP](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-key-and-add-it-to-gcp)
3. [Install web server dependencies](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/install-web-server-dependencies)
<!-- 4. [Configure PHP](/samples/writing/configure-php) -->
5. [Add GitHub access to your VM](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/add-github-access-to-your-vm)
6. [Clone your repository into your web server](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/clone-your-repository-into-your-web-server)
7. [Configure Apache](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/configure-apache)
8. [Create a new virtual host configuration](/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-new-virtual-host-configuration)
