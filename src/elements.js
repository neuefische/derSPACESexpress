// import { teasers } from "module";

const teasers = [
  {
    title: "Wie Frankreich seine Bettwanzen-Plage bekämpft",
    subtitle: "Panorama",
    imglink:
      "https://cdn.prod.www.spiegel.de/images/f07fe829-de28-40ab-8db1-91f2e3373ebf_w948_r1.77_fpx28.63_fpy44.98.jpg",
    teasertext:
      "Sie beißen Bürger und Touristen, lösen Juckreiz und großes Unbehagen aus: Frankreich hat ein Problem mit Bettwanzen.Im Kampf gegen das Ungeziefer schaltet sich nun der Staat ein.",
    teasersource: "dpa",
    teaserlink: "article.html"
  },
  {
    title: "Erst der Mensch, dann der Sport, dann das Drumherum",
    subtitle: "Malaika Mihambo",
    imglink: "https://www.sueddeutsche.de/image/sz.1.4814389/600x337",
    teasertext:
      "Weitsprung-Weltmeisterin Malaika Mihambo scheint zu Beginn der neuen Leichtathletik- Saison fast alles zu gelingen.Auch, weil sie klare Prioritäten setzt.",
    teasersource: "Von Johannes Knuth, Leipzig",
    teaserlink: "article-2.html"
  }
];

function createTeaser(teasers) {
  /* define object from DOM where we want to append teasers */
  const main = document.querySelector("main");

  teasers.forEach(teaser => {
    /* define elements of teaser */
    let teaserArticle = document.createElement("article");
    let teaserImgWrapper = document.createElement("div");
    let teaserImg = document.createElement("img");
    let teaserSubtitle = document.createElement("div");
    let teaserTitle = document.createElement("h2");
    let teaserText = document.createElement("p");
    let teaserSource = document.createElement("p");
    let teaserLink = document.createElement("a");

    /* insert content */
    let subtitleContent = document.createTextNode(teaser.subtitle);
    teaserSubtitle.appendChild(subtitleContent);

    let titleContent = document.createTextNode(teaser.title);
    teaserTitle.appendChild(titleContent);

    let teaserTextContent = document.createTextNode(teaser.teasertext);
    teaserText.appendChild(teaserTextContent);

    let teaserSourceContent = document.createTextNode(teaser.teasersource);
    teaserSource.appendChild(teaserSourceContent);

    let teaserLinkContent = document.createTextNode("Mehr lesen...");
    teaserLink.appendChild(teaserLinkContent);

    teaserLink.href = teaser.teaserlink;

    /* build article structure */
    teaserArticle.appendChild(teaserImgWrapper);
    teaserArticle.appendChild(teaserSubtitle);
    teaserArticle.appendChild(teaserTitle);
    teaserArticle.appendChild(teaserText);
    teaserArticle.appendChild(teaserSource);
    teaserArticle.appendChild(teaserLink);

    /* insert image into image wrapper */
    teaserImgWrapper.appendChild(teaserImg);

    /* insert image link into image*/
    teaserImg.src = teaser.imglink;

    /* append article to main element */
    main.appendChild(teaserArticle);
  });
}

/* run function using teasers data */

createTeaser(teasers);
