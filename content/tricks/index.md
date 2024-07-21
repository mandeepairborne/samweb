+++
title = "Tricks"
+++

# Tricks

Several lesser known Duckquill thingies.

## Styling

Duckquill is pretty easy to restyle with just a few lines of SCSS in the [appropriate location](@/_index.md#custom-stylesheets). Let's see some examples.

### Navbar

You can make navbar have more classic look:

![clasic navabr](https://files.catbox.moe/udj332.png)

```scss
#site-nav {
    top: 0;
    margin-top: 0;
    box-shadow: 0 0.75rem 1.5rem -1rem rgba(0, 0, 0, 0.5);
    border-radius: 0;
    width: 100%;
    max-width: 100%;

    nav,
    #search-container {
        margin: 0 auto;
        width: min(var(--container-width), 90%);
    }

    nav ul li a,
    nav ul li#search button,
    nav ul li#language-switcher details summary {
        border-radius: var(--rounded-corner);
    }
    #search-container {
        #search-bar {
            border-radius: var(--rounded-corner);
        }
    }
}
```

Or you can make it sticked to top:

![sticked navabr](https://files.catbox.moe/wkweqh.png)

```scss
#site-nav {
    top: 0;
    margin-top: 0;
    box-shadow: 0 0.75rem 1.5rem -1rem rgba(0, 0, 0, 0.5);
    border-radius: 0 0 1.625rem 1.625rem;
}
```

### Headings

Default headings might not fit your taste, that's understandable. Good thing that we can ~~make them boring~~ fix them:

![boring headings](https://files.catbox.moe/gwa9cc.png)

```scss
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: bold;
    font-family: var(--font-system-ui);
}

h1 {
    font-weight: 900;
}
```

### Strikethrough

The default strikethrough style is too much for you? Let's sort this out:

![plain strikethrough](https://files.catbox.moe/y2tbwm.png)

```scss
del {
    box-shadow: none;
    border-radius: unset;
    background-color: unset;
    padding: 0;
    color: inherit;
}
```

### Edge Highlights

Hate the skeuomorphic edge highlight on all semi-transparent elements? It's easy to get rid of them:

```scss
:root {
    --edge-highlight: 0 0 0 transparent;
}
```

### Horizontal Rule

Don't like that fancy horizontal rule? Let's make it more modern:

![modern horizontal rule](https://files.catbox.moe/qyqzoy.png)

```scss
hr {
    border-top: 0.25rem solid var(--fg-muted-2);
    width: 50%;

    &::after {
        display: none;
    }
}
```
