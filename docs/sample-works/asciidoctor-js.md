---
title: 'Asciidoc in 2021'
type: concept
---

## Why asciidoc in 2021? 

I started my career with Madcap Flare's xhtml. At the time, most tools were still proprietary, and the open source community was not as well developed as it is today. We also used SVN to track our changes. 

After my time at HPE, I went on to work at Red Hat. There, we used ASCIIdoc and git. ASCIIdoc was a major departure from my previous writing experience. It was somewhat complex, but offered lots of power and a standardized toolkit for addressing a lot of tech-writing specific needs. 

After a similar amount of time, hungry for more career growth, I decided to move to CA and try my hand at the startup scene. I fully embraced docs-as-code principles, leaned more heavily into git with GitHub's collaborative model, and embraced all things open-source, jamstack, and static-site generators. This almost universally meant some flavor of markdown. And what's not to like? Markdown features the simplest syntax of them all. It covers 80% of the bases with 20% of the complexity, and it's freakin' ubiquitous. It's deeply integrated into just about every static site generator and is nearly exclusively the default. Everywhere I look these days, from the biggest players in the software industry to the humblest little open source project readme, markdown is there. Confluence, slack, and all of our default collaboration tools feature it as a backbone. 

I was riding high on the mindshare wave with everyone else. 

### The ugly truth

However, there's an ugly reality lurking beneath all of those static site generators and chat apps: flavors. Markdown's syntax is simply isn't sufficient for most serious documentation tasks, so developer teams have taken to extending it in all manner of ways. Some folks built preprocessors, others defined markdown flavors and extended the markdown processor itself, and others still spilled over into the site layer to handle things after the markdown processor has run (looking at you hugo). 

These limitations don't do much of anything to hamper markdown's mainstream appeal, because most casual users don't care for advanced features. 

### Hard realities, and why ASCIIdoc still works

ASCIIdoc's rigid specification is arguably easier to write. We've probably all struggled with how many times to indent a sublist bullet, or code fence under a numbered list. Sometimes the markdown processor just seems to make no sense of what you're trying to achieve. You sit there and go through the indent-save-preview-indent-save-preview loop until it displays as you want. 

Past a certain level of simplicity, the idea of "human readable" markdown source code becomes optimistic at best. You're going to need to generate the output to see how it looks eventually. If you've tried making sense of a markdown table in source, you probably know what I mean. 

The latest commonmark specification is still wrestling with these ambiguities to define something more predictable. https://spec.commonmark.org/0.30/ It still doesn't support tables! Markdown also doesn't support text variables, includes, conditionals, 

as a result, we end up with a careful explanation of various combinations of spaces and tabs. I can appreciate John's detailed information in this specification -- after all, that's what this spec is for. But, to the industry collectively, I have to say: what are we doing here folks? Is this any simpler, better, faster, or readable for us? If we need to turn on tab and space identifiers and carefully count whitespace type and quantity in our source code to build something like a nested list, have we really improved on anything over ASCIIdoc?

Those clever folks over there have conveniently added support for most of markdown's basic syntax as well. 

My biggest gripe against asciidoc: that it's losing mindshare, may be of less concern to me now as well. After ES6, I've found myself increasingly using javascript for all the things. That means JS powered SSGs go to the front of my list. ASCIIdoc was pushed out of that domain for a while, but now there's a viable javascript port of asciidoctor: https://github.com/asciidoctor/asciidoctor.js which makes it even easier to add asciidoc support to my favorite new SSGs.

#### the pros know

hugo, github, and red hat still use it. 
