function showContent(contentId) {
    const contentContainers = document.querySelectorAll(".hidden");
    contentContainers.forEach((container) => {
        container.style.display = "none"; // Hide all content containers
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = "block"; // Show the selected content container
}
