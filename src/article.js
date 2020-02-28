import { articlePicture } from "./data/elements.js";

const picture = document.createElement("img");
const pictureWrapper = document.querySelector(".card--article__img");

picture.src = articlePicture.imgLink;

pictureWrapper.appendChild(picture);
