// Load article structure
import { structure } from "./data/articlestructure.js";
//const articleStructure = import("./data/articlestructure.js");

// Create variable to contain all needed data
let articleContent = [];

// Import data
importData(querySectionIds());

// Return ids of sections from page as array

function querySectionIds() {
  let sections = document.querySelectorAll("section");
  let sectionIds = [];
  sections.forEach(function(element) {
    if (element.id != "") {
      sectionIds.push(element.id);
    }
  });

  return sectionIds;
}

// Load data needed for the page

function importData(sectionIds) {
  sectionIds.forEach(function(id, index) {
    let dataSourcePath = "./data/" + id + ".js";
    articleContent[index] = import(dataSourcePath);
  });
}

// Create content after data is loaded

let content = [];
let contentIds = querySectionIds();

Promise.all([articleContent]).then(results => {
  content = results;

  console.log(structure);
  console.log(content);
});
