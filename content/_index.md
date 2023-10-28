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
- For a very pleasant look, the colors are tinted with the primary color.
- Proper favicon for modern browsers and Apple device icons.
- Mastodon, Lemmy and other social media meta cards for easy sharing. Try [Share Preview](https://apps.gnome.org/SharePreview/) to test.
- Local copy of the amazing [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/) fonts, plus [Bootstrap Icons](https://icons.getbootstrap.com). No slowdowns pulling from external hosting.
- Mobile friendly, with proper dark variant.
- [Mastodon-powered comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon). Comment using any ActivityPub service by replying to Mastodon post.

> Duckquill is made based on needs of [my website](https://daudix.exozy.me), if you need some feature/configuration that doesn't exist feel free to open an issue or better yet, pull request!

## Installation

First, download this theme to your `themes` directory:

```sh
git clone https://git.exozy.me/daudix/duckquill.git themes/duckquill
```

...or add as submodule for easy updating (recommended if you already have git setup on site):

```sh
git submodule init
git submodule add https://git.exozy.me/daudix/duckquill.git themes/duckquill
```

To update the submodule, use the following command:

```sh
git submodule update --remote --merge
```

and then enable it in your `config.toml`:

```toml
theme = "duckquill"
```

## Options

Duckquill offers some configuration options to make it fit you better.

### Custom stylesheets

You can add your own or override existing styles by creating custom stylesheet and adding it in the `config.toml`:

```toml
[extra]
stylesheets = [
  "YOUR_STYLE.css"
]
```

It expects the style to be in the `static` directory. If you are using Sass it will be compiled there anyway.

If for some reason overridden class are not respected, try using `!important`. You can import styles from Duckquill using `@use "../themes/duckquill/sass/NEEDED_FILE.scss";`.

### Primary color

Duckquill respects chosen primary color everywhere, you can use any HEX color code you want

First, change the primary color in `config.toml`:

```toml
[extra]
primary_color = "#HEX_COLOR_CODE"
```

Then, paste the following code inside `sass/custom.scss` (inside your site, not the theme):

```sass
@use "sass:color";

$primary-color: #HEX_COLOR_CODE;
$primary-color-alpha: color.scale($primary-color, $alpha: -80%);

$bg-color-l: color.mix($primary-color, rgb(250, 250, 250), 10%);
$bg-color-d: color.mix($primary-color, rgb(11, 11, 11), 5%);

$crt-bg: radial-gradient(
  color.scale($primary-color, $lightness: -80%),
  color.scale($primary-color, $lightness: -90%)
);

$glow: 0 0 0 1px color.scale($primary-color, $alpha: -95%),
  0 2px 6px 2px color.scale($primary-color, $alpha: -95%),
  0 4px 24px 4px color.scale($primary-color, $alpha: -90%);

:root {
  --bg-color: #{$bg-color-l};
  --crt-bg: #{$crt-bg};
  --primary-color-alpha: #{$primary-color-alpha};
  --primary-color: #{$primary-color};
  --glow: #{$glow};
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #{$bg-color-d};
  }
}
```

Set any color in `$primary-color` and reload, the primary color should be used now. This is a hack that is needed until Zola will be able to use `config.toml` inside Sass.

### `[extra]` variables:

- `primary_color`: Primary color used in some browsers set in metadata, see [#primary-color](https://git.exozy.me/daudix/duckquill#primary-color)
- `animated_favicon`: Specify if the favicon are animated GIF (true, false)
- `date_format`: Allows setting custom date format in [Tera](https://keats.github.io/tera) format, all available variables are listed [here](https://docs.rs/chrono/0.4.31/chrono/format/strftime/index.html). Does not apply to comments
- `hosting`: Where the website source are located, used on 404 page
- `issues_url`: Link to site bug tracker, if present
- `source_url`: Link to site source (not built site)

### `[extra.nav]` variables:

- `show_feed`: Whether to display "Feed" link
- `nav_links`: Links used in navigation bar

The `nav_links` are set like the following:

```toml
[extra]
nav_links = [
  {url = "https://example.org", name = "Example"},
  {url = "https://mstdn.social", name = "Mastodon", icon = "mastodon"},
]
```

You can set any icon from [Bootstrap Icons](https://icons.getbootstrap.com) for the navigation items, simply add the `icon` variable and put icon name there, without `bi-` prefix, since it's added automatically :)

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

These values are also used in the `<head>` for Mastodon verification.

## Test pages

- [Demo page](https://duckquill.exozy.me/demo)
- [Cake Party!](https://duckquill.exozy.me/demo/page)
- [ActivityPub/​Fediverse comments demo](https://duckquill.exozy.me/demo/comments)

## Contribute

If you want to improve Duckquill in any way, feel free to open an issue, or even better, a pull request! I'm happy about every contribution!

The main repo is https://git.exozy.me/daudix/duckquill, but since only exozy.me members can open issues and pull requests, there is two-way mirror at https://next.forgejo.org/daudix-UFO/duckquill, you can open issues and pull requests there just fine.

## Credits

- [Quill image used in the metadata card](https://commons.wikimedia.org/wiki/File:3quills.jpg)

## Special thanks ♥

- [Jakub Steiner](https://jimmac.eu) for an awesome [OS Component Website](https://jimmac.github.io/os-component-website), on top of which this whole thing is built
- [Cassidy James](https://cassidyjames.com) for an awesome [Mastodon-powered Comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon)
- [Mehdi](https://codepen.io/meduzen) for an awesome [CSS Scanlines](https://codepen.io/meduzen/pen/zxbwRV)
- dwb, ejm and jgs for awesome ASCII art
- Everyone who supported me and said good stuff <3
