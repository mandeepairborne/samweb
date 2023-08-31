---
layout: default
---

<pre class="ascii">
      _          _          _          _          _
    >(')____,  >(')____,  >(')____,  >(')____,  >(') ___,
      (` =~~/    (` =~~/    (` =~~/    (` =~~/    (` =~~/
jgs~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~
</pre>

# Duckquill

[Duckquill](https://codeberg.org/daudix-UFO/duckquill) is a modern, pretty, and clean [Jekyll](https://jekyllrb.com) template that has the purpose of greatly simplifying the process of rolling up your blog. It aims to let you write simple markdown pages and deploy them to Codeberg or GitLab Pages.

Edit a bit of metadata and tweak some of the included graphics and have a blog up in minutes!

- Proper favicon for modern browsers and Apple device icons.
- Mastodon, Facebook and other social media meta cards for easy sharing. Try [Share Preview](https://apps.gnome.org/app/com.rafaelmardojai.SharePreview) to test.
- Local copy of the amazing [Inter font](https://rsms.me/inter/). No slowdowns pulling from external hosting.
- Mobile friendly, dark variant included.

Make yourself a cup of your <abbr title="Coffee, tea, or water">favorite drink</abbr> and let's start!

## Preparation

This template needs a <abbr title="Continuous Integration – Practice of automating the integration of code changes from multiple contributors into a single software project">CI</abbr> to be built and deployed, I recommend using either Codeberg or GitLab Pages. For Codeberg Pages I've written a [blog post](https://daudix-ufo.codeberg.page/blog/migration-from-github-to-codeberg/#github-pages--codeberg-pages) on step-by-step guide how to get the CI working.

There is an included `.woodpecker.yml` and `.gitlab-ci.yml` that should be easy to adjust to your situation. For additional info see [Codeberg Pages](https://docs.codeberg.org/codeberg-pages/) and [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) docs.

## Getting started

This template includes some useful utilities to make your life easier and keep you sane (looking at you, ruby stuff).

The process of setting up the site locally consists of:

- [Install Podman](https://podman.io/docs/installation). On [Fedora Silverblue](https://fedoraproject.org/silverblue) it's already installed

- Run `local.sh build` to create a Podman container that uses official Jekyll image, download and install all needed Gems and build the site locally.

- Edit the [Jekyll](https://jekyllrb.com) config file -- `_config.yml`.

- Replace all mentions and links of `Daudix` and `Duckquill` with yours.

- Replace or edit all the graphics. Using [Inkscape](https://inkscape.org) are recommended. If you want to reduce the SVGs size, use [svgo](https://github.com/svg/svgo).

- Test the site locally. Run `local.sh serve`.

- `git commit` your changes and push to your remote repo for automatic deployment.
