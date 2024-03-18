document.addEventListener("DOMContentLoaded", () => {
    const newsLink = document.querySelector(".news");
    const newsDropdown = document.querySelector(".dropdown-content");

    newsLink.addEventListener("click", (e) => {
        e.preventDefault();
        newsLink.classList.toggle("active");
        newsDropdown.classList.toggle("show");
    });

    newsLink.addEventListener("mouseover", () => {
        newsLink.style.color = "pink";
    });

    newsLink.addEventListener("mouseout", () => {
        if (!newsDropdown.classList.contains("show")) {
            newsLink.style.color = "#fff";
        }
    });
});
