# Duckquill

[![Please don't upload to GitHub](https://nogithub.codeberg.page/badge.svg)](https://nogithub.codeberg.page)
[![status-badge](https://ci.exozy.me/api/badges/159/status.svg)](https://ci.exozy.me/repos/159)

[Duckquill](https://git.exozy.me/daudix/duckquill) is a modern, pretty, and clean (and very opinionated) [Zola](https://www.getzola.org) theme that has the purpose of greatly simplifying the process of rolling up your blog. It aims to provide all the needed options for comfortable writing, keeping the balance of it being simple.

[![Duckquill](https://i.imgur.com/PrzgtNB.png)](https://i.imgur.com/1fCi1sF.png)

## Installation

First, fork it and download this theme to your `themes` directory:

```sh
git clone YOUR_FORK.git themes/duckquill
```

...or add as submodule for easy updating (recommended if you already have git setup on site):

```sh
git submodule init
git submodule add YOUR_FORK.git themes/duckquill
```

and then enable it in your `config.toml`:

```
theme = "duckquill"
```

## Options

Duckquill offers some configuration options to make it fit you better (but that doesn't make it less opinionated).

### Custom CSS

You can add your own or override existing styles in the `themes/duckquill/sass/_custom.scss`, if for some reason overridden class are not respected, try using `!important`. This file is empty by default so you should not have issues with doing the `git pull` later.

### Accent color

Duckquill respects chosen accent color everywhere, you can use any HEX color code you want

First, change the accent color in `config.toml`:

```
[extra]
accent_color = "#HEX_COLOR_CODE"
```

Then, also change it in `themes/duckquill/sass/_variables.scss`:

```
$accent-color: #HEX_COLOR_CODE;
```

### `[extra]` variables:

- `accent_color`: Accent color used in some browsers set in metadata, for actual accent color see `themes/duckquill/sass/_variables.scss`
- `animated_favicon`: Specify if the favicon are animated GIF (true, false)
- `blog_title`: The title of the blog, used in `/blog`
- `blog_description`: The description of the blog, displayed right under the blog title
- `date_format`: Allows setting custom date format in [Tera](https://keats.github.io/tera) format, all available variables are listed [here](https://docs.rs/chrono/0.4.31/chrono/format/strftime/index.html). Does not apply to comments
- `hosting`: Where the website source are located, used on 404 page
- `issues_url`: Link to site bug tracker, if present
- `source_url`: Link to site source (not built site)
- `nav_links`: Links used in navigation bar

The `nav_links` are set like so:

```
[extra]
nav_links = [
  {url = "https://example.org", name = "Example"},
  {url = "https://mstdn.social", name = "Mastodon"},
]
```

### `[extra.footer]` variables:

- `johnvert_ref`: Site URL without `https://` part or trailing slashes, e.g `example.org`. Works only if `show_johnvert` are set to `true`
- `show_copyright`: Whether to display `© Duckquill, 2023`. (true, false)
- `show_johnvert`: Whether to display [Johnvertisement](https://john.citrons.xyz). (true, false)
- `show_powered_by`: Whether to display `Powered by Zola and Duckquill`. (true, false)
- `show_source`: Whether to display `Website source` link. (true, false)

### `[extra.comments]` variables:

- `host`: Mastodon home server, e.g `mstdn.social`
- `user`: Mastodon username, e.g `Daudix`
- `token`: Mastodon app token, e.g `jTNX9pAV8XEPBby0cPWF6CmGY60kkIy4vidggfxXmoQ`. Can be left empty, but in this case only first 60 comments will be loaded, instructions on how to get one are available [here](https://github.com/cassidyjames/cassidyjames.github.io/blob/47c449a0083113ea5be8d215beb6650ac64929e4/_config.yaml#L48-L52)

## Test pages

- [Demo page](https://duckquill.exozy.me/demo)
- [Cake Party!](https://duckquill.exozy.me/demo/page)
- [ActivityPub/​Fediverse comments demo](https://duckquill.exozy.me/demo/comments)

## Special thanks ♥

- [Jakub Steiner](https://jimmac.eu) for an awesome [OS Component Website](https://jimmac.github.io/os-component-website), on top of which this whole thing is built
- [Cassidy James](https://cassidyjames.com) for an awesome [Mastodon-powered Comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon)
- [Mehdi](https://codepen.io/meduzen) for an awesome [CSS Scanlines](https://codepen.io/meduzen/pen/zxbwRV)
- dwb, ejm and jgs for awesome ASCII art
