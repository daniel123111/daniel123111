document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");

    const container = document.getElementById("projectContainer") as HTMLElement | null;

    if (!container) {
        console.error("Error: projectContainer element not found!");
        return;
    }

    const projects: { title: string, link: string, image: string, description: string }[] = [
        { title: "Crypto Currency Project", link: "https://daniel123111.github.io/crypto-currency-project/", image: "assets/images/crypto-project-preview.jpg", description: "A cryptocurrency tracking website." },
        { title: "Countrys Project", link: "https://daniel123111.github.io/countrys/", image: "assets/images/countrys-project-preview.jpg", description: "An interactive website about countries." }
    ];

    projects.forEach(project => {
        const projectHTML = `
            <div class="col-md-3 mb-4">
                <a href="${project.link}" target="_blank" class="card-link">
                    <div class="card project-card text-center">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
        container.innerHTML += projectHTML;
    });
});
