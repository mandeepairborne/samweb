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

[Duckquill](https://codeberg.org/daudix/duckquill) is a modern, pretty, and clean (and very opinionated) [Zola](https://www.getzola.org) theme that has the purpose of greatly simplifying the process of rolling up your blog. It aims to provide all the needed options for comfortable writing, keeping the balance of it being simple.

Edit a bit of metadata and tweak some of the included graphics and have a blog up in minutes!

- Pretty, yet lightweight. No JavaScript is used.
- For a very pleasant look, the colors are tinted with the primary color.
- Proper favicon for modern browsers and Apple device icons.
- Mastodon, Lemmy and other social media meta cards for easy sharing. Try [Share Preview](https://apps.gnome.org/SharePreview/) to test.
- Local copy of the amazing [Inter](https://rsms.me/inter/) and [Source Code Pro](https://adobe-fonts.github.io/source-code-pro/) fonts. No slowdowns pulling from external hosting.
- Mobile friendly, with proper dark variant.
- [Mastodon-powered comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon). Comment using any ActivityPub service by replying to Mastodon post.

> Duckquill is made based on needs of [my website](https://daudix.codeberg.page), if you need some feature/configuration that doesn't exist feel free to open an issue or better yet, pull request!

## Installation

First, download this theme to your `themes` directory:

```sh
git clone https://codeberg.org/daudix/duckquill.git themes/duckquill
```

...or add as submodule for easy updating (recommended if you already have git setup on site):

```sh
git submodule init
git submodule add https://codeberg.org/daudix/duckquill.git themes/duckquill
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

Duckquill offers some configuration options to make it fit you better; most options have pretty descriptive comments, so it should be easy to understand what they do.

### Custom stylesheets

You can add your own or override existing styles by creating custom stylesheet and adding it in the `config.toml`:

```toml
[extra]
stylesheets = [
  "YOUR_STYLE.css"
]
```

Additional stylesheets; expects it to be in the `static` directory. If you are using Sass it will be compiled there anyway.

If for some reason overridden class are not respected, try using `!important`. You can import styles from Duckquill using:

```scss
@use "../themes/duckquill/sass/NEEDED_FILE.scss";
```

### Primary color

Duckquill respects chosen primary color everywhere, you can use any HEX color code you want

First, change the primary color in `config.toml`:

```toml
[extra]
primary_color = "COLOR_CODE"
```

Then, add `custom.css` to additional stylesheets.

```toml
[extra]
stylesheets = [
  "custom.css"
]
```

Then, paste the following code inside `sass/custom.scss` (inside your site, not the theme):

```scss
@use "sass:color";

$primary-color: COLOR_CODE;
$primary-color-alpha: color.scale($primary-color, $alpha: -80%);

$bg-color-l: color.scale($primary-color, $lightness: 80%);
$bg-color-d: color.scale($primary-color, $lightness: -90%, $saturation: -50%);

$crt-bg: radial-gradient(
  color.scale($primary-color, $lightness: -80%),
  color.scale($primary-color, $lightness: -90%)
);

$nav-bg-l: color.scale($bg-color-l, $alpha: -20%, $lightness: 50%);
$nav-bg-d: color.scale(
  $bg-color-d,
  $alpha: -20%,
  $lightness: 5%,
  $saturation: -50%
);

$glow: 0 0 0 1px color.scale($primary-color, $alpha: -95%),
  0 2px 6px 2px color.scale($primary-color, $alpha: -95%),
  0 4px 24px 4px color.scale($primary-color, $alpha: -90%);

:root {
  --bg-color: #{$bg-color-l};
  --crt-bg: #{$crt-bg};
  --glow: #{$glow};
  --nav-bg: #{$nav-bg-l};
  --primary-color-alpha: #{$primary-color-alpha};
  --primary-color: #{$primary-color};
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #{$bg-color-d};
    --nav-bg: #{$nav-bg-d};
  }
}
```

Set any color in `$primary-color` and reload, the primary color should be used now. This is a hack that is needed until Zola will be able to use `config.toml` options inside Sass files.

## Test pages

- [Demo page](https://daudix.codeberg.page/duckquill/demo)
- [Cake Party!](https://daudix.codeberg.page/duckquill/demo/page)
- [ActivityPub/​Fediverse comments demo](https://daudix.codeberg.page/duckquill/demo/comments)

## Contribute

If you want to improve Duckquill in any way, feel free to open an issue, or better yet, a pull request! I appreciate every contribution!

## Credits

- [Quill image used in the metadata card](https://commons.wikimedia.org/wiki/File:3quills.jpg)

## Thanks to ♥

- [Jakub Steiner](https://jimmac.eu) for the [OS Component Website](https://jimmac.github.io/os-component-website), on top of which this whole thing is built
- [Cassidy James](https://cassidyjames.com) for the [Mastodon-powered Comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon)
- [Rasmus](https://rsms.me) for the [Inter](https://rsms.me/inter/) font
- [JetBrains](https://www.jetbrains.com) for the [JetBrains Mono](https://www.jetbrains.com/lp/mono/) font
- [Bootstrap](https://getbootstrap.com) for the [Bootstrap Icons](https://icons.getbootstrap.com) font
- Everyone who supported me and said good stuff <3
