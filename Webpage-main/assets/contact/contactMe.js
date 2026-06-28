document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");
    const navbar = document.querySelector(".navbar");
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    function updateBackToTop() {
        if (window.scrollY > 120) {
            backToTop.style.opacity = "1";
            backToTop.style.pointerEvents = "auto";
        } else {
            backToTop.style.opacity = "0";
            backToTop.style.pointerEvents = "none";
        }

        if (window.scrollY > 80) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    }
    window.addEventListener("scroll", updateBackToTop);
    updateBackToTop();

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const subject = form.subject.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !subject || !message) {
                formMessage.textContent = "Please complete all fields before sending.";
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.textContent = "Please enter a valid email address.";
                return;
            }

            const mailtoLink = `mailto:horizonsow@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            formMessage.textContent = `Thanks, ${name}! Your email app should open with your message ready.`;
            window.location.href = mailtoLink;
            form.reset();
        });
    }
});