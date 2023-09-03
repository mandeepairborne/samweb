# Duckquill 🦆🪶

[![Please don't upload to GitHub](https://nogithub.codeberg.page/badge.svg)](https://nogithub.codeberg.page)
[![status-badge](https://ci.codeberg.org/api/badges/12567/status.svg)](https://ci.codeberg.org/repos/12567)

[Duckquill](https://daudix-ufo.codeberg.page/duckquill/) is a modern, pretty, and clean [Jekyll](https://jekyllrb.com) template that has the purpose of greatly simplifying the process of rolling up your blog. It aims to let you write simple markdown pages and deploy them to Codeberg or GitLab Pages.

## Usage

### 🧪️ Test pages

- [Demo page](https://daudix-ufo.codeberg.page/duckquill/demo/)
- [Cake Party!](https://daudix-ufo.codeberg.page/duckquill/demo-page/)
- [ActivityPub/​Fediverse comments demo](https://daudix-ufo.codeberg.page/duckquill/demo-comments/)

### 🏗️ Build static files

```shell
./local.sh build
```

### ⏱️ Watch static files and serve

```shell
./local.sh serve
```

_Building guide were shamelessly taken from [here](https://talk.jekyllrb.com/t/local-testing-of-existing-github-jekyll-site/7459/4)_

_Initial script (`local.sh`) were taken from [here](https://kuros.in/docker/docker-jekyll-container-to-serve-locally)_

### 🏷️ Rename posts to web-friendly format

```shell
./rename.sh posts
```

## ❤️ Special thanks

- [Jakub Steiner](https://jimmac.eu) for an awesome [OS Component Website](https://jimmac.github.io/os-component-website), on top of which this whole thing is built
- [Cassidy James](https://cassidyjames.com) for an awesome [Mastodon-powered comments](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon)
- dwb, ejm and jgs for awesome ASCII art
