document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("cta-button");
    if (window.innerWidth <= 480) {
        button.textContent = "Know More";
    }

    window.addEventListener("resize", function() {
        if (window.innerWidth <= 480) {
            button.textContent = "Know More";
        } else {
            button.textContent = "Unleash Your IT Potential";
        }
    });
});
