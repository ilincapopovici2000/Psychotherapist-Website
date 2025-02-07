function displayTextService(button) {
  // Find the parent `.service-item` of the clicked button
  const serviceItem = button.closest(".service-item");
  
  // Find the `.description` element within the same `.service-item`
  const description = serviceItem.querySelector(".description-service");
  
  // Show the description and hide the button
  if (description) description.style.display = "block";
  button.style.display = "none";
}

function displayTextArticle(button) {
  // Find the parent `.article-item` of the clicked button
  const articleItem = button.closest(".article-item");
  
  // Find the `.description` element within the same `.article-item`
  const description = articleItem.querySelector(".description-article");
  
  // Show the description and hide the button
  if (description) {
    description.style.display = "block";
    articleItem.style.height = `${articleItem.scrollHeight + 600}px`;
  }
  button.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("menu-bar");
  const menuLinks = document.querySelectorAll(".nav-link");

  menuLinks.forEach(link => {
      link.addEventListener("click", () => {
          menuCheckbox.checked = false; // Uncheck the menu checkbox
      });
  });
});

  