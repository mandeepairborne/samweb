+++
+++

{% crt() %}
```
      _          _          _          _          _
    >(')____,  >(')____,  >(')____,  >(')____,  >(') ___,
      (` =~~/    (` =~~/    (` =~~/    (` =~~/    (` =~~/
jgs~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~
```
{% end %}

# Duckquill

[Duckquill](https://codeberg.org/daudix-UFO/duckquill) is a modern, pretty, and clean (and very opinionated) [Zola](https://www.getzola.org) theme that has the purpose of greatly simplifying the process of rolling up your blog. It aims to provide all the needed options for comfortable writing, keeping the balance of it being simple.

Edit a bit of metadata and tweak some of the included graphics and have a blog up in minutes!

- Pretty, yet lightweight. No JavaScript are used.
- For a very pleasant look, the colors are tinted with an accent color.
- Proper favicon for modern browsers and Apple device icons.
- Mastodon, Lemmy and other social media meta cards for easy sharing. Try [Share Preview](https://apps.gnome.org/SharePreview/) to test.
- Local copy of the amazing [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/) fonts. No slowdowns pulling from external hosting.
- Mobile friendly, with proper dark variant.
- [Mastodon-powered comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon). Comment using any ActivityPub service by replying to Mastodon post.

> See [demo](@/demo/index.md) for showcase of all Duckquill possibilities. Oh and [comments demo](@/demo/comments.md) for showcase of Mastodon-powered comments.

Make yourself a cup of your <abbr title="Coffee, tea, or water">favorite drink</abbr> and let's start!

## Getting started

> If you already have Zola site with Git skip to step #3

Setting up Zola blog with Duckquill is very simple and consists of the following steps:

1. [Install Zola](https://www.getzola.org/documentation/getting-started/installation/) and create default site:

```sh
zola init blog
```

2. Initialize Git:

```sh
git init
```

3. Add Duckquill as Git submodule for easy updating:

```
git submodule add https://codeberg.org/daudix-UFO/duckquill.git themes
```

4. Edit `config.toml` and enable Duckquill theme:

```
theme = "duckquill"
```

Voilà! now it's just a matter of changing some settings and writing your first post.

See project's [README](https://codeberg.org/daudix-UFO/duckquill#duckquill) for all available configuration variables and [Zola docs](https://www.getzola.org/documentation/) for everything else.

## Special thanks ♥

- [Jakub Steiner](https://jimmac.eu) for an awesome [OS Component Website](https://jimmac.github.io/os-component-website), on top of which this whole thing is built
- [Cassidy James](https://cassidyjames.com) for an awesome [Mastodon-powered Comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon)
- [Mehdi](https://codepen.io/meduzen) for an awesome [CSS Scanlines](https://codepen.io/meduzen/pen/zxbwRV)
- dwb, ejm and jgs for awesome ASCII art
