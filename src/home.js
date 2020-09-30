
import {render} from "./index.js";

const loadHome = (content) => {

  const aboutSection = document.createElement("div");
  const flippableDiv = document.createElement("div");

  const introduction = () => {  
    const titleDiv = document.createElement("div");
    const spanTitle = document.createElement("span");
    const paragraph = document.createElement("p");
    const paragraphMark = document.createElement("mark");
    const buttonContainer = document.createElement("div");
    const spanButton = document.createElement("span");
    const arrowIcon = document.createElement("i");
    aboutSection.id = "about";
    titleDiv.id = "title";
    spanTitle.id = "name";
    spanTitle.innerText = "Israel Lopez";
    paragraphMark.innerHTML = "&#60; Front end Developer /&#62;";
    paragraph.append(paragraphMark);
    buttonContainer.id = "buttonContainer";
    spanButton.id = "aboutMeButton";
    spanButton.innerText = "About Me";
    arrowIcon.className = "fas fa-caret-right";
    aboutSection.append(titleDiv);
    titleDiv.append(spanTitle);
    titleDiv.append(paragraph);
    titleDiv.append(buttonContainer);
    buttonContainer.append(spanButton);
    buttonContainer.append(arrowIcon);
    spanButton.addEventListener("click", function () {
      let flippableDiv = document.getElementById("flippableDiv");
      console.log(flippableDiv);
      flippableDiv.classList.toggle("cardFlipped");
    });
    content.append(aboutSection);
  };

  const miniBio = () => {
    const bioDiv = document.createElement("div");
    const pictureDiv = document.createElement("div");
    const miniBioDiv = document.createElement("div");
    const bioParagraph = document.createElement("p");
    const bioMark = document.createElement("mark");
    const profilePicture = document.createElement("img");
    profilePicture.src = "./profile.jpg";
    profilePicture.id = "profilePicture";
    bioDiv.id = "bioDiv";
    flippableDiv.id = "flippableDiv";
    pictureDiv.id = "pictureContainer";
    pictureDiv.className = "face frontSide";
    miniBioDiv.id = "miniBio";
    miniBioDiv.className = "face backSide";
    bioParagraph.id = "aboutMe";
    bioMark.innerText = "I am from Mexico, started learning to program a few years ago. My learning curriculum consists of resources from FreeCodeCamp and The Odin Project."
    pictureDiv.append(profilePicture);
    flippableDiv.append(pictureDiv);
    flippableDiv.append(miniBioDiv);
    bioParagraph.append(bioMark);
    bioDiv.append(flippableDiv);
    miniBioDiv.append(bioParagraph);
    aboutSection.append(bioDiv);
  };

    introduction();
    miniBio();
 
};

export { loadHome };
