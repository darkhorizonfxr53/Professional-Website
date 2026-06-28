(function () {
    const STORAGE_KEY = "theme";

    function isDarkSaved() {
        return localStorage.getItem(STORAGE_KEY) === "dark";
    }

    function setToggleIcon(isDark) {
        const toggle = document.getElementById("darkModeToggle");
        if (!toggle || !window.SiteIcons) return;

        toggle.dataset.icon = isDark ? "sun" : "moon";
        toggle.innerHTML = window.SiteIcons[toggle.dataset.icon];
    }

    function setTheme(isDark) {
        document.documentElement.classList.toggle("dark-mode", isDark);
        document.body.classList.toggle("dark-mode", isDark);
        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
        setToggleIcon(isDark);
    }

    if (isDarkSaved()) {
        setTheme(true);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.getElementById("darkModeToggle");

        if (!toggle) {
            console.warn("Dark mode toggle not found");
            return;
        }

        if (isDarkSaved()) {
            setTheme(true);
        } else {
            setToggleIcon(false);
        }

        toggle.addEventListener("click", () => {
            const isDark = !document.body.classList.contains("dark-mode");
            setTheme(isDark);
        });
    });
})();
