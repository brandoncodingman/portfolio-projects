
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("home").addEventListener("click", function () {
            const navbar = document.querySelector(".tag");
            if (navbar) {
                navbar.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Navbar not found");
            }
        });
    });

