function displayTextService(button) {
  // Find the parent `.service-item` of the clicked button
  const serviceItem = button.closest(".service-item");
  
  // Find the `.description` element within the same `.service-item`
  const description = serviceItem.querySelector(".description-service");
  
  // Show the description and hide the button
  if (description) description.style.display = "block";
  button.style.display = "none";
}

function expandArticle(articleNumber) {
  let article1 = document.getElementById("article1");
  let article2 = document.getElementById("article2");

  // Reset both articles: remove "expanded" and "hidden" classes, hide full content, show "read more"
  [article1, article2].forEach(article => {
    article.classList.remove("expanded", "hidden");
    // Assume .description-article is the element that contains the full content
    let desc = article.querySelector(".description-article");
    if (desc) desc.style.display = "none";
    let readMore = article.querySelector(".read-more");
    if (readMore) readMore.style.display = "block";
    let showOther = article.querySelector(".show-other");
    if (showOther) showOther.style.display = "none";
  });

  // Now, based on the chosen article, update the classes and display
  if (articleNumber === 1) {
    article1.classList.add("expanded");      // Expand article 1
    article2.classList.add("hidden");          // Hide article 2

    article1.querySelector(".description-article").style.display = "block";
    article1.querySelector(".read-more").style.display = "none";
    article1.querySelector(".show-other").style.display = "block";
    article1.scrollIntoView({ behavior: "smooth" });
  } else {
    article2.classList.add("expanded");      // Expand article 2
    article1.classList.add("hidden");          // Hide article 1

    article2.querySelector(".description-article").style.display = "block";
    article2.querySelector(".read-more").style.display = "none";
    article2.querySelector(".show-other").style.display = "block";
    article2.scrollIntoView({ behavior: "smooth" });
  }
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

  