function showContent(contentId) {
    const contentContainers = document.querySelectorAll(".content");
    contentContainers.forEach((container) => {
        container.classList.add("hidden");
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.remove("hidden");

    const buttons = document.querySelectorAll(".btn-nav-pill");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    const activeButton = document.querySelector(`[onclick="showContent('${contentId}')"]`);
    activeButton.classList.add("active");
}
