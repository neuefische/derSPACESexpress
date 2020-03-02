// Create data for import
import { teasers } from "./data/elements.js";

function createTeaser(teasers) {
  /* define object from DOM where we want to append teasers */
  const main = document.querySelector("main");

  /* run trough each teaser from teasers object */
  teasers.forEach(teaser => {
    /* define elements of teaser */
    let teaserArticle = document.createElement("article");
    let teaserImgWrapper = document.createElement("div");
    let teaserImg = document.createElement("img");
    let teaserSubtitle = document.createElement("div");
    let teaserTitle = document.createElement("h2");
    let teaserText = document.createElement("p");
    let teaserLink = document.createElement("a");
    teaserImg.classList.add("img-fluid");

    /* insert content */
    let subtitleContent = document.createTextNode(teaser.subtitle);
    teaserSubtitle.appendChild(subtitleContent);

    let titleContent = document.createTextNode(teaser.title);
    teaserTitle.appendChild(titleContent);

    let teaserTextContent = document.createTextNode(teaser.teaserText);
    teaserText.appendChild(teaserTextContent);

    let teaserLinkContent = document.createTextNode("Mehr lesen...");
    teaserLink.appendChild(teaserLinkContent);

    teaserLink.href = teaser.teaserLink;

    /* build article structure */
    teaserArticle.appendChild(teaserImgWrapper);
    teaserArticle.appendChild(teaserSubtitle);
    teaserArticle.appendChild(teaserTitle);
    teaserArticle.appendChild(teaserText);
    teaserArticle.appendChild(teaserLink);

    /* insert image into image wrapper */
    teaserImgWrapper.appendChild(teaserImg);

    /* insert image link into image */
    teaserImg.src = teaser.imgLink;

    /* append article to main element */
    main.appendChild(teaserArticle);
  });
}

/* run function using teasers data */

createTeaser(teasers);

/* Load more button functionality */

let bestOfPrintContentWrapper = document.querySelector(
  ".best-of-print__wrapper"
);

let bestOfPrintContent = document.querySelectorAll(".best-of-print__content");

bestOfPrintContentWrapper.style.height = "0px";
bestOfPrintContentWrapper.style.transition = "1s";
bestOfPrintContent.forEach(article => {
  article.style.display = "none";
});

let loadMoreButton = document.querySelector(".best-of-print__button");
loadMoreButton.addEventListener("click", function() {
  bestOfPrintContent.forEach(article => {
    article.style.display = "flex";
  });
  let bestOfPrintContentHeight = bestOfPrintContentWrapper.scrollHeight;
  bestOfPrintContentWrapper.style.height = bestOfPrintContentHeight + "px";
});
