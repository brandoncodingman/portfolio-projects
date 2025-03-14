
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("home").addEventListener("click", function () {
            const navbar = document.querySelector(".nav-header");
            if (navbar) {
                navbar.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Navbar not found");
            }
        });
    });

