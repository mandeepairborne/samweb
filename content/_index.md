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

[Duckquill](https://codeberg.org/daudix/duckquill) is a modern, pretty, and clean (and very biased) [Zola](https://www.getzola.org) theme that has the purpose of greatly simplifying the process of rolling up your blog. It aims to provide all the needed options for comfortable writing, keeping the balance of it being simple.

Edit a bit of metadata and tweak some of the included graphics and have a blog up in minutes!

- Pretty, yet lightweight. No JavaScript is used (except for comments, heh)
- Colors are tinted with the user-selected primary color for a pleasent look
- ~50kB in size; take that, 12MB Medium!
- Uses system fonts for blazingly fast loading
- Mobile friendly, with a proper dark variant
- Proper favicon for modern browsers and Apple device icons
- Twitter, Mastodon and other social media meta cards for easy sharing. Try [Share Preview](https://apps.gnome.org/SharePreview/) to test
- [Mastodon-powered comments](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/); comment using compatible ActivityPub server by replying to a Mastodon post

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

Duckquill respects chosen primary color everywhere, simply change the primary color in `config.toml`:

```toml
[extra]
primary_color = "COLOR_CODE"
primary_color_alpha = "COLOR_CODE"
```

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
- [Carl Schwan](https://carlschwan.eu) for the [Mastodon-powered Comments](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/)
- Everyone who supported me and said good stuff <3
