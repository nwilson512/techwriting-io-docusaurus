---
title: 'Build Sass themes with Sass Autocompile'
type: task
---
before you can build your CSS files using the Sass Autocompile plugin, you must first install and configure it.

**Perform the following steps to install and configure the Sass Autocompile plugin:**

1. Install the Sass Autocompiler package using the Atom package manager:

	![](/img/sassAutocompilePackageInstall.png)

2. Install the dependencies using npm:

		npm install -g node-sass

3. In the packages page, click the "Sass Autocompile" package and change the default value under **Filename pattern for 'compressed' compiled files** to the following:

	```
	../css/$1.css
	```

	![](/img/sassAutocompilePath.png)

	This instructs the compiler to do 3 things:

	* Move up a folder
	* Move down into the `css` directory
	* Write the compiled CSS using the source file name and append the '.css' file extension onto it

	![](/img/sassAutocompileLocations.png)

	<!-- ```
	/sass/
	↳main.scss		<sass code written here>

	<...>

	/css/
	↳main.css		<compiles here>
	``` -->
