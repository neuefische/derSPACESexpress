// Load article structure
const articleStructure = import("./data/articlestructure.js");

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
  sectionIds.forEach(function(id) {
    let dataSourcePath = "./data/" + id + ".js";
    articleContent[id] = import(dataSourcePath);
  });
}

// Create content after data is loaded

Promise.all([articleStructure, articleContent]).then(result => {
  console.log(result);
  console.log(result[0].structure.teaser.article);
});

/* pageData.then(
  function(result) {
    console.log("WORKS"); // "Stuff worked!"
    console.log(result.bestofprint[0].title);
  },
  function(err) {
    console.log("WRRONG"); // Error: "It broke"
  }
); */

// Create structure

/* teasers.forEach(function(element) {
  console.log(element);
}); */
