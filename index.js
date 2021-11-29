import photographers from "./js/homePage/photographerslist.js";
import filter from "./js/homePage/filter.js";
import scrollid from "./js/homePage/scroll.js";
const photographerslist = document.getElementsByClassName("photographers-list");

fetch("./Api/photographers.json")
  .then((res) => res.json())
  .then((data) => {
    // Filte Nav Tags Class
    new filter().filterTags(data);
    scrollid();
    // photographers List Class
    data.photographers.map((data) => {
      photographerslist[0].innerHTML += new photographers().photograph(data);
    });
  });
