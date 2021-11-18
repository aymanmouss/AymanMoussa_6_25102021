// const slected = document.getElementsByClassName("slected");
const dropDownMenu = document.getElementById("dropDown-menu");
const slect = document.getElementsByClassName("slect");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const photos = document.getElementsByClassName("photos");
const idLocation = window.location.search.split("?id=")[1];
import MediaDisplay from "./mediaDisplay.js";
// import DropDownFilter from "./dropDownFilter.js";
// import LightBoxClass from "./lightBox2.js";
let sortBy = [];
export default class DropDown {
  constructor(data) {
    const toggle = () => {
      [...slect].map((item) => {
        item.classList.toggle("hiden");
      });
    };
    one.addEventListener("click", (e) => {
      toggle();
      if (two.classList == "slect") {
        one.innerHTML = `Popularité <i class="fas fa-chevron-down"></i>`;
      } else {
        one.innerHTML = `Popularité <i class="fas fa-chevron-up"></i>`;
      }

      two.innerText = "Date";
      three.innerText = "Titre";
      three.classList.remove("active");
      if (slect[0].classList.value == "slect hiden") {
        sortBy = data.media.sort((a, b) => {
          return b.likes - a.likes;
        });
        photos[0].innerHTML = "";
        sortBy.map((item) => {
          if (item.photographerId == idLocation) {
            photos[0].innerHTML += new MediaDisplay().photoLsit(item);
          }
        });
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target.id == "2") {
        one.innerHTML = `Date <i class="fas fa-chevron-up"></i>`;
        toggle();
        sortBy = data.media.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        photos[0].innerHTML = "";
        sortBy.map((item) => {
          if (item.photographerId == idLocation) {
            photos[0].innerHTML += new MediaDisplay().photoLsit(item);
          }
        });
      }
      if (e.target.id == "3") {
        one.innerHTML = `Titre <i class="fas fa-chevron-up"></i>`;
        three.classList.add("active");
        toggle();
        sortBy = data.media.sort((a, b) => {
          if (a.title < b.title) return -1;
          return 1;
        });
        photos[0].innerHTML = "";
        sortBy.map((item) => {
          if (item.photographerId == idLocation) {
            photos[0].innerHTML += new MediaDisplay().photoLsit(item);
          }
        });
        // new LightBoxClass();
      }
    });
  }
}
