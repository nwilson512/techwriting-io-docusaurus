---
title: 'Build new Sass partials'
type: concept
---

Once you've set up the Sass Auotcompiler utility to work with your Statamic site, you're ready to configure partials.

By default, the Sass Auotcompiler utility looks for partials to import within the same directory as your current .scss file. As a best practice, prepend partials with an underscore and place them in subdirectories under the directory your Sass file is in.

to add new partials, add folders and underscores to filenames:

```
main.css
↳/folder/_partial.scss
↳/otherFolder/_otherPartial.scss
```

Add these folders to in your main .scss with an `include` statement:

```
@import "folder/_partial.scss";
```

:::note
While the leading underscore and file extension in the import statement are not strictly required by the Sass compiler, I do recommend them.


Sass Autocompile will not recompile your main CSS file when you save a partial. If you need that, consider using the `--watch` flag with the [Sass](https://sass-lang.com/guide) command line interface.
:::

For example, the **_core**, **_footer**, **_nav**, and **_form** partials link to the sassy.scss file in the image below:

![](/img/sassPartials.png)
