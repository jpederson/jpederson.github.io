---
layout: post
categories: Code
title: The Case for No Database
subtitle: Why you shouldn't overcomplicate your website.
photo: /img/boards.jpg
author: James Pederson
---

Every web creator or project manager has been there. You need a site that's bigger than a few pages and it's time to *get a CMS*. Uh oh. Now is when most developers bust out their favorite database-driven content management system - but it doesn't have to be that way.

More recently, there's been a resurgence of developers (myself included) favoring static site generators like [Jekyll](http://jekyllrb.com), [Assemble.io](http://assemble.io), or [Cabin](http://cabinjs.com). These generators still separate content from presentation like all web systems should, but the content is actually stored in plain text files instead of a database. Then the generator comes through and processes all your files, outputting them to a directory that can serve your website.

With Jekyll, you can even host your website for free on Github Pages where they'll build your site every time you commit to a repository. You can even edit the site directly on Github or use a tool like [prose.io](http://prose.io) for an intuitive editor that's geared specifically toward managing a Jekyll site through the Github APIs.

_______________

### Why I Like Static Sites

With as little nerding out as possible, here's a distilled list of what I enjoy about static site generators.

1. **Speed** wins every time - especially with ever-increasing mobile usage. Static pages load faster than those constructed on a server before being sent to your browser - and the content can be cached in the browser, making it load faster in the future.
2. **Stability** is never a problem with static sites - there are very few things that can go wrong on the server side to cause issues with your site. Also - if you host on Github, you get *free lifetime backups of every single **version*** of *every single post you've ever written* (just because of how Git itself works).
3. **Editing** a static site is a natural experience for many developers - and HTML shorthand languages like Markdown and Textile make it just as easy for most other users to manage content. Since they're all file-based, you can use any text editor you like, or pick up a tool like [prose.io](http://prose.io) to edit from anywhere.

_______________

### Final Thoughts

Overall, I've had a blast working with static site generators, and will be including them in my workflow as much as possible in the future. They're great for blogs and small sites that just need simple content management and are reading-focused. Especially for publishing clients, I'll start to advocate static site generation as the best way to work.

