---
title: 'Create a Google Cloud Platform Compute Engine instance'
type: task

next-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/create-a-key-and-add-it-to-gcp
  title: Create a key and add it to GCP
prev-page: 
  url: /sample-works/create-a-statamic-web-server-on-google-cloud-platform/
  title: Create a Statamic web server on Google Cloud Platform
---

GCP Compute Engines are virtual machines (VM) that run in the cloud. When you create a Compute Engine instance, GCP places it within logical and network groups associated with your project.

When you create and manage a web server at this level, you are working in the infrastructure layer and are using GCP as an **infrastructure as a service** provider.

**Perform the following steps to create a GCP Compute Engine instance that will become your production web server:**

1. Select the navigation menu in the upper left corner of the page:

    ![](/img/gcpNavMenu.png)

2. Select **Compute Engine** from the dropdown:

    ![](/img/gcpComputeEngine.png)

3. Select **CREATE INSTANCE** at the top of the **VM instances** page:

    ![](/img/gcpCreateInstance.png)

4. Configure, then create a new instance using the following guidelines:

    * **Name**: a descriptive name
    * **Region**: as close as possible to your target traffic sources
    * **Machine type**: f1-micro
    * **Boot disk**: standard persistent disk, 10GB, Debian
    * **Firewall**: Allow HTTP traffic, allow HTTPS traffic


    <img class="imgOverrideTall" src="/img/gcpInstanceCreateDetails.png"/>
