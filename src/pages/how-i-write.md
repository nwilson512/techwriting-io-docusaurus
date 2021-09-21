---
title: How I write
---

## My Documentation Process

Much like developing a product, writing documentation moves through distinct phases. Adhere to these, and you set yourself up for success. The following phases summarize my understanding of an ideal documentation process:

* Awareness
* Preparation
* Execution
* Revision
* Publication
* Support

### Awareness

My documentation process starts long before I put pen to paper. Before I can consider writing effective documentation, I must know what I'm writing about, how it works, and who I'm working with. I generally break this down into the following two categories:

* **Build Relationships**
  * Scrum with engineering and PM
  * Work with other writers
  * Meet with support and QA

* **Research**
  * Read existing documentation, product plans, product specs
  * Try the product, get stuck, break things
  * Take notes
  * Eat lunch with engineering

By doing these actions on a regular basis, I grow my technical knowledge of the product, understand the direction it is heading as a product, and identify upcoming features that may require documentation.

### Preparation

Once I've identified a feature as requiring documentation, I prepare to write about it by narrowing my focus:

* Announce ownership of documentation for a feature
* Read feature specs
* Reach out to stakeholders in engineering and QA
* Acquire access to test environments
* Perform user steps

### Execution

In this phase, I produce distinct deliverables:

**Project plan (statement of work)**: A document that contains deadlines, isolates feature scope, identifies stakeholders, describes what work will be done.

**Outline**: A document that specifies where in the existing documentation new writing will go, describes modifications to existing sections and new sections, plans the organizational layout of the document to be written.

**Draft**: content-complete documentation written in accordance with the project plan and outline.

### Revision

Once I complete my draft, I send it for review to stakeholders and peers to ensure technical accuracy and quality of writing. I make requested edits and respond to feedback, always ensuring I clearly identify my request and specify a time-frame for responses.

### Publication

In this phase, I publish the document. Depending on the documentation infrastructure, this may require syntax conversion, merging branches, or deployment.

### Support

Just because a document has been published, does not mean it is perfect or requires no updates. I support my documents by reviewing analytics, responding to customer feedback, and providing content updates as the product changes.

<!-- 

## Content strategy

How do you design a complete document set? How do you know it's complete? You start with understanding your users. The same principles that guide product development also guide documentation development. Indeed, you should think of your documentation as part of your product.  -->

<!-- ### Build user profiles and write user stories

When approaching engineering using Agile methodologies, you'll have your own user stories already. Each distinct user story 

If we think about documentation as a product, we can start to define user stories specific to documentation. These user stories should always form a superset of the engineering documentation success condition. For example, let's say you're designing a piece of software for a printer. If the  -->

<!--
## Documentation platforms

* ASCIIdoc
* Madcap Flare

### Modular Content Management

In the structure outlined in the [about section](/documentation-new/about/), you'll see that the content is all contained in a single folder. This allows us to build documents using a single source of modular topics. Now we can reuse shared topics. Neat, huh?

The topics in modular content management consist of two parts: metadata (in this case: YAML frontmatter) and the markdown content itself. YAML frontmatter contains any kind of useful metadata you can imagine, for example:

  * Publish/Update date
  * Product or category
  * Related topics
  * Topic type
  * Author
  * Anything else

### Setting up modular content infrastructure

Modular content infrastructure isn't easy to set up; it requires quite a lot more forethought and management overhead than writing in a word processor, or even writing into a basic CMS (I'm looking you, WordPress). It requires a powerful content management system and the technical understanding to make that work.

For more detailed information about how modular content infrastructure is set up on this website, see the [about section](/documentation-new/about/)

### Markup Details

Modular content markup can be identified by the following principles:

  * Topic-based authorship
  * Inclusion of text variables
  * Centralized content sourcing

#### Topic-based authorship

If you're doing all of the legwork to implement a modular content system, you need to be writing with it in mind. In essence, that's what topic-based authoring is. The modular segments you write must be independently understandable.

Let's look at an example: steaming rice with vegetables

Consider all of the steps that go into steaming rice with vegetables, on the surface it's pretty simple:

1. Gather ingredients
2. Measure the rice, vegetables, water
3. Add everything to the rice steamer
4. Cook it

Let's look again though, this simple task leaves a lot of questions unanswered:

* How much of each ingredient do you add?
* How do you cook it? In a pot, or a steamer? And for how long?
* What kind of rice are you using, and do you need to adjust the water added for different kinds of rice?
* How do you measure the ingredients?

There are even a number of indirect questions we can ask that are related to this task that range from very fundamental to very specific:

* What is/are rice, vegetables, a pot, a measuring cup, or a steamer?
* Where do you buy any of these things?
* What form do vegetables come in? Fresh, frozen, canned, dehydrated.
* What kind of steamer is best for me?

In the context of steaming vegetables, this exercise is a little bit tedious. After all, if you're not sure how to steam rice, you probably just google the answer, or call your mom. But what happens when we shift to something like a airplane firmware? All of a sudden these related topics matter, and your users probably won't be able to ask their mom. Heck, if your product is suitably niche or proprietary, your users might not even find their answer on google.

Equally important is knowing what not-to-write. To identify things that you shouldn't be writing about, consider the following:

* how many degrees of separation from your product is this detail?
* what will happen if this detail goes unsaid?
* how many people will this detail impact?
* Is this detail someone else's responsibility and can you leverage their documentation?
* what will happen if this detail becomes outdated or wrong?

Some examples of things that you probably wouldn't want to include in example documentation:

* what is the meaning of life?
* who makes rice cookers?
* how long does the cook cycle last on the steam-o-matic steamer?

You can break up this act into a series of DITA-esque topics. -->