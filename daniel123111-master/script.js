document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
    // Ensure TypeScript correctly recognizes the container
    var container = document.getElementById("projectContainer");
    if (!container) {
        console.error("Error: projectContainer element not found!");
        return;
    }
    // ✅ Only Your Projects (No Extra Ones)
    var projects = [
        { title: "Crypto Currency Project", link: "https://daniel123111.github.io/crypto-currency-project/", image: "assets/images/crypto-project-preview.jpg", description: "A cryptocurrency tracking website." },
        { title: "Countrys Project", link: "https://daniel123111.github.io/countrys/", image: "assets/images/countrys-project-preview.jpg", description: "An interactive website about countries." }
    ];
    // ✅ Dynamically add projects to the HTML
    projects.forEach(function (project) {
        var projectHTML = "\n            <div class=\"col-md-3 mb-4\">\n                <a href=\"".concat(project.link, "\" target=\"_blank\" class=\"card-link\">\n                    <div class=\"card project-card text-center\">\n                        <img src=\"").concat(project.image, "\" class=\"card-img-top\" alt=\"").concat(project.title, "\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">").concat(project.title, "</h5>\n                            <p class=\"card-text\">").concat(project.description, "</p>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        ");
        container.innerHTML += projectHTML;
    });
});
