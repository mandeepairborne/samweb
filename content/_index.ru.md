+++
insert_anchor_links = "right"
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

Duckquill - это современная, красивая и чистая (и мнительная) тема [Zola](https://www.getzola.org), цель которой - значительно упростить процесс создания вашего блога. Она призвана предоставить все необходимые опции для комфортного письма, сохраняя при этом баланс простоты оформления.

Отредактируйте немного метаданных и измените графику - и блог будет готов за считанные минуты!

- Красивая, но легкая. Не используется JavaScript (за исключением комментариев, хех).
- Цвета подкрашиваются выбранным пользователем основным цветом для приятного вида.
- Размер ~90 кБ; выкуси, Medium весящий 12 МБ!
- Использует системные шрифты для молниеносной загрузки.
- Дружелюбена к мобильным устройствам, имеет правильный темный вариант.
- Правильный фавикон для современных браузеров и иконки устройств Apple.
- Мета-карточки для Twitter, Mastodon и других социальных сетей для удобства публикации. Попробуйте [Share Preview](https://apps.gnome.org/SharePreview/), чтобы протестировать.
- [Комментарии с использованием Mastodon](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/); комментируйте, используя совместимый сервер ActivityPub, отвечая на пост Mastodon.

> Duckquill создан на основе нужд [моего сайта](https://daudix.codeberg.page), если вам нужна какая-то функция/конфигурация, которой не существует, не стесняйтесь открыть тему или, еще лучше, запрос на исправление!

## Установка

Сначала клонируйте эту тему в каталог `themes`:

```sh
git clone https://codeberg.org/daudix/duckquill.git themes/duckquill
```

...или добавьте в качестве субмодуля для удобства обновления (рекомендуется, если у вас уже настроен git на сайте):

```sh
git submodule init
git submodule add https://codeberg.org/daudix/duckquill.git themes/duckquill
```

Настоятельно рекомендуется переключиться с ветки `main` на последний выпуск:

```sh
cd themes/duckquill
git checkout tags/v2.1.0
```

Чтобы обновить субмодуль, просто переключитесь на новый тег:

> **Примечание:** Проверьте в журнале изменений все версии, вышедшие после той, которую вы используете, возможно, в них есть изменения, требующие ручного вмешательства.

```sh
git submodule update --remote --merge
git tag --list
git checkout tags/v2.1.0
```

Затем включите её в файле `config.toml`:

```toml
theme = "duckquill"
```

## Конфигурации

Duckquill предлагает несколько вариантов конфигурации, чтобы сделать его более подходящим для вас; большинство вариантов имеют довольно подробные комментарии, так что понять, что они делают, не составит труда.

### Пользовательские Таблицы Стилей

Вы можете добавить свои собственные или переопределить существующие стили, создав пользовательскую таблицу стилей и добавив ее в `config.toml`:

```toml
[extra]
stylesheets = [
  "YOUR_STYLE.css"
]
```

Дополнительные таблицы стилей; ожидает, что они будут находиться в директории `static`. Если вы используете Sass, они будут скомпилированы там в любом случае.

Если по какой-то причине переопределенные классы не учитываются, попробуйте использовать `!important`. Вы можете импортировать стили из Duckquill, используя:

```scss
@use "../themes/duckquill/sass/NEEDED_FILE.scss";
```

### Основной Цвет

Duckquill везде соблюдает выбранный основной цвет, просто измените основной цвет в `config.toml`:

```toml
[extra]
primary_color = "COLOR_CODE"
primary_color_alpha = "COLOR_CODE"
```

## Тестовые Страницы

- [Демо страница](@/demo/index.ru.md)
- [Тортовая вечеринка!](@/demo/page.ru.md)
- [Демо комментариев ActivityPub/​Fediverse](@/demo/comments.ru.md)
- [Демо блока кода (требуется Zola v0.18.0 и выше)](@/demo/code.ru.md)

## В Дикой Природе

<details>
  <summary>Список становится длинным, поэтому нажмите, чтобы развернуть.</summary>

- [agustinramirodiaz.github.io](https://agustinramirodiaz.github.io)
- [alavi.me](https://alavi.me)
- [bano.dev](https://bano.dev)
- [blog.pansi21.xyz](https://blog.pansi21.xyz)
- [daudix.codeberg.page](https://daudix.codeberg.page) <small>(очевидно)</small>
- [daveparr.info](https://www.daveparr.info)
- [digital-horror.com](https://digital-horror.com)
- [enriquekesslerm.com](https://enriquekesslerm.com)
- [jzbor.de](https://jzbor.de)
- [licu.dev](https://licu.dev)
- [luciengheerbrant.com](https://luciengheerbrant.com)
- [lukoktonos.com](http://www.lukoktonos.com)
- [malloc.garden](https://malloc.garden)
- [mourelask.xyz](https://mourelask.xyz)
- [nbenedek.me](https://nbenedek.me)
- [notaplace.com](https://notaplace.com)
- [pyter.at](https://pyter.at)
- [rbd.gg](https://www.rbd.gg)
- [rerere.unlogic.co.uk](https://rerere.unlogic.co.uk)
- [siddharthsabron.in](https://siddharthsabron.in)
- [skaven.org](https://skaven.org)
- [sorcery.nexus](https://sorcery.nexus)
- [sorg.codeberg.page](https://sorg.codeberg.page)
- [sungsphinx.codeberg.page](https://sungsphinx.codeberg.page)
- [treeniks.github.io](https://treeniks.github.io)
- [vikramxd.github.io](https://vikramxd.github.io)
- [zorrn.net](https://www.zorrn.net)
- Ваш? <small>(не стесняйтесь [связаться со мной](https://daudix.codeberg.page/about/#contacts) или отправьте запрос на исправление)</small>

</details>

## В Титрах

- [andreatitolo.com](https://www.andreatitolo.com/credits)
- [aplos.gxbs.me](https://aplos.gxbs.me)
- [archaeoramblings.com](https://www.archaeoramblings.com/credits)
- [oomfie.town](https://oomfie.town/credits)
- [veeronniecaw.space](https://veeronniecaw.space)

## Исходники Ресурсов

Все исходники ресурсов Duckquill доступны [здесь](https://codeberg.org/daudix/archive/src/branch/main/duckquill/src) и лицензированы под CC BY-SA 4.0. Причина не размещать исходники в том же репо, что и сам Duckquill, проста: Я хочу, чтобы он был как можно меньше, чтобы клонирование репо было быстрым и не утяжеляло сайт; именно поэтому в демо используются удаленные изображения, а не локальные копии.

## Кредиты

- [Изображение пера, используемое в карточке метаданных](https://commons.wikimedia.org/wiki/File:3quills.jpg)

## Использованные Инструменты

- [VSCodium](https://vscodium.com) - Бесплатные/открытые программные бинарные файлы VSCode
  - [Capitalize](https://marketplace.visualstudio.com/items?itemName=viablelab.capitalize) - Капитализация заголовков без случайных сайтов.
  - [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django) - Tera местами очень похожа на Liquid.
  - [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - В основном для `config.toml`.
  - [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode) - Ужасно красивая тема.
  - [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) - Не уверен, что это действительно работает. ¯\\\_(ツ)_/¯
  - [Sort CSS](https://marketplace.visualstudio.com/items?itemName=piyushsarkar.sort-css-properties) - Спасатель для длинных свойств CSS.
- [Инструменты разработчика Firefox](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) - Лучшие в своем роде.

Что касается форматирования кода, то я использую встроенный в VSCodium. Prettier хорош, но мне не нравится, как он пытается вместить код в очень узкую колонку, это, конечно, можно изменить, но встроенный форматер делает свое дело, поэтому я не заморачиваюсь.

## Спасибо

- [Якубу Штайнеру](https://jimmac.eu) за [OS Component Website](https://jimmac.github.io/os-component-website), который послужил отправной точкой и вдохновением.
- [Карлу Швану](https://carlschwan.eu) за [Mastodon-powered Comments](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/).
- [Джонатану Нилу](https://jonneal.dev) за [normalize.css](https://csstools.github.io/normalize.css/).
- [Modern Font Stacks](https://modernfontstacks.com) за стек системных шрифтов.
- Всем, кто поддерживал меня и говорил хорошие вещи <3
