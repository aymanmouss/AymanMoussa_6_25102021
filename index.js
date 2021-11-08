import photographerslist from "./js/photographerslist.js";
import filter from "./js/filter.js";

const photographerslist1 =
  document.getElementsByClassName("photographers-list");

fetch("./photographers.json")
  .then((res) => res.json())
  .then((data) => {
    // Filte Nav Tags Class
    new filter().filterTags(data);
    // photographers List Class
    data.photographers.map((data) => {
      photographerslist1[0].innerHTML += new photographerslist().photograph(
        data
      );
    });
  });
