    document.addEventListener("DOMContentLoaded", function () {
        fetch("./components/header.html")
            .then(response => response.text())
            .then(data => document.getElementById("navbar-container").innerHTML = data);

        fetch("./components/footer.html")
            .then(response => response.text())
            .then(data => document.getElementById("footer").innerHTML = data);
    });

    

    