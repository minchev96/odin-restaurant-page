import home from "../images/home.jpg";
import menu from "../images/menu.jpg";
import about from "../images/about.jpg";

const headerContent = document.querySelector("#content");

let img = document.createElement("img");

export const initialPage = function () {
  img.src = home;
  headerContent.appendChild(img);
};

export const navigatePages = function () {
  document.body.addEventListener("click", (e) => {
    if (e.target.className.includes("home")) {
      clearImg();
      initialPage();
    }
    if (e.target.className.includes("menu")) {
      clearImg();
      img.src = menu;
      headerContent.appendChild(img);
    }
    if (e.target.className.includes("about")) {
      clearImg();
      img.src = about;
      headerContent.appendChild(img);
    }
  });
};

function clearImg() {
  headerContent.removeChild(img);
}
