(function () {
    const lazyIframes = document.querySelectorAll("iframe[data-lazy-src]");
    if (!lazyIframes.length) return;

    function loadIframe(iframe) {
        const src = iframe.dataset.lazySrc;
        if (!src) return;

        iframe.src = src;
        iframe.removeAttribute("data-lazy-src");
    }

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        loadIframe(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "200px 0px" }
        );

        lazyIframes.forEach((iframe) => observer.observe(iframe));
    } else {
        lazyIframes.forEach(loadIframe);
    }
})();
