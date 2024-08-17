(function () {
    // Get the default theme from the HTML data-theme attribute.
    const defaultTheme = document.documentElement.getAttribute("data-theme");

    // Set the data-default-theme attribute only if defaultTheme is not null.
    if (defaultTheme) {
        document.documentElement.setAttribute("data-default-theme", defaultTheme);
    }

    // Attempt to retrieve the current theme from the browser's local storage.
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme && storedTheme !== "system") {
        document.documentElement.setAttribute("data-theme", storedTheme);
    } else if (defaultTheme && storedTheme !== "system") {
        document.documentElement.setAttribute("data-theme", defaultTheme);
    } else {
        // If no theme is found in local storage and no default theme is set, CSS handles the theme.
        document.documentElement.removeAttribute("data-theme");
    }
})();

const defaultTheme = document.documentElement.getAttribute("data-default-theme");

function setTheme(theme, saveToLocalStorage = false) {
    if (theme === "system") {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", theme);
    }

    if (saveToLocalStorage) {
        localStorage.setItem("theme", theme);
    } else {
        localStorage.removeItem("theme");
    }

    // Dispatch a custom event for comment systems.
    window.dispatchEvent(new CustomEvent("themeChanged", { detail: { theme } }));
}

function resetTheme() {
    // Reset the theme to the default or system preference if no default is set.
    setTheme(defaultTheme || "system");
}

// Functions connected to buttons via `onclick` attributes.
function switchTheme(theme) {
    if (theme === "system") {
        resetTheme();
    } else {
        setTheme(theme, true);
    }
}
