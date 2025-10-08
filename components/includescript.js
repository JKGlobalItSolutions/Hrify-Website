    document.addEventListener("DOMContentLoaded", function () {
        // Use absolute path from root directory
        fetch("/components/header.html")
            .then(response => response.text())
            .then(data => document.getElementById("navbar-container").innerHTML = data);

        fetch("/components/footer.html")
            .then(response => response.text())
            .then(data => document.getElementById("footer").innerHTML = data);
    });
