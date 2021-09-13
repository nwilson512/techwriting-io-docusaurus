---
title: 'Install Tailwind CSS'
type: task
---

Tailwind is a CSS framework that allows you to develop a site's visual layout by referencing pre-established classes in your HTML. In this site, we use a combination of Tailwind and Sass to control the styling.

Tailwind is not included with Statamic's default theme or installation, so you must install it separately.

**Perform the following steps to add Tailwind to your local Statamic website using the Tailwind CSS addon:**

1. Download the [Tailwind CSS addon](https://statamic.com/marketplace/addons/tailwind) for Statamic.

2. Ensure you meet all the dependencies listed in the readme. Install missing dependencies using Homebrew:

	```
	brew install yarn
	brew install webpack
	```

3. Copy the addon into the addons folder.

	![](/img/tailwindAddon.png)

4. Create a new theme. Navigate to your primary Statamic directory, in my case, that’s just under `/Statamic/statamin/`:

	```
	cd /Statamic/statamin
	php please make:theme <theme name>
	```

5. activate the theme which you want to add tailwind to in the control panel:

	![](/img/tailwindThemeSelect.png)


6. Install Tailwind:

		php please tailwind:install
