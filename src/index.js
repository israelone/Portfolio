import { loadHome } from "./home.js";
import { loadProjects } from "./projects";
import { loadContact } from "./contact.js";

const contentSection = document.getElementById("content");

const render = (e) => {
  contentSection.innerHTML = "";
  if (e.id == "Home") {
    loadHome();
  } else if (e.id == "Projects") {
    loadProjects();
  } else if (e.id == "Contact") {
    loadContact();
  }
};

const loadNavBar = () => {
  const menuListItems = ["Home", "Projects", "Contact"];
  const navBar = document.createElement("nav");
  const navBarLogo = document.createElement("div");
  const logo = document.createElement("img");
  const menuList = document.createElement("ul");
  logo.src = "logo.png";
  logo.alt = "Izzy Dev";
  logo.id = "navBarLogo";
  menuList.id = "menuList";
  navBarLogo.id="logoContainer";
  navBarLogo.append(logo);
  navBar.append(navBarLogo);
  navBar.append(menuList);

  for (let x = 0; x < menuListItems.length; x++) {
    let item = document.createElement("li");
    let anchorLink = document.createElement("a");
    anchorLink.className = "sections";
    anchorLink.innerText = menuListItems[x];
    anchorLink.href = menuListItems[x].toLowerCase();
    item.append(anchorLink);
    menuList.append(item);
  }
  contentSection.appendChild(navBar);
};

loadNavBar(contentSection);
loadHome(contentSection);
loadProjects(contentSection);
loadContact(contentSection);


export { render };
