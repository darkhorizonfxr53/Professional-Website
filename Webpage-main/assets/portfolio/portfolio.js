document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       BACK TO TOP + NAVBAR
    ========================= */

    const backToTop = document.getElementById("backToTop");
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        /* ===== NAVBAR SHRINK ===== */

        if (window.scrollY > 80) {
            navbar.classList.add("shrink");
        } 
        
        else {
            navbar.classList.remove("shrink");
        }

        /* ===== BACK TO TOP BUTTON ===== */

        if (window.scrollY > 500) {

            backToTop.style.opacity = "1";
            backToTop.style.pointerEvents = "auto";

        } 
        
        else {

            backToTop.style.opacity = "0";
            backToTop.style.pointerEvents = "none";
        }
    });

    /* ===== SCROLL TO TOP ===== */

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* =========================
       ACCORDION CARDS
    ========================= */

    document.querySelectorAll(".skill-card").forEach(card => {

        card.addEventListener("click", () => {
            toggleCard(card);
        });

        card.addEventListener("keydown", (e) => {

            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCard(card);
            }
        });
    });

    /* =========================
       TOGGLE FUNCTION
    ========================= */

    function toggleCard(card) {

        card.classList.toggle("active");

        const expanded =
            card.getAttribute("aria-expanded") === "true";

        card.setAttribute("aria-expanded", !expanded);
    }

});