const card = document.getElementsByClassName("card");
const photos = document.getElementsByClassName("photos");
const idLocation = window.location.search.split("?id=")[1];
const modal = document.querySelector(".modal");
const total = document.getElementsByClassName("total");
const one = document.getElementById("1");
import LightBoxClass from "./photographersPages/lightBox.js";
import FormModal from "./photographersPages/form.js";
import Likes from "./photographersPages/likes.js";
import TotalLikes from "./photographersPages/totalLikes.js";
import DropDown from "./photographersPages/dropDown.js";
import MediaDisplay from "./photographersPages/mediaDisplay.js";

let mediaData = [];
fetch("./photographers.json")
  .then((res) => res.json())
  .then((data) => {
    mediaData.push(data.media);

    //  photographer Card
    data.photographers.map((item) => {
      if (item.id == idLocation) {
        card[0].innerHTML += new MediaDisplay().cardlist(item);
        // class TotalLikes
        new TotalLikes(item);
      }
    });

    //   Media list
    data.media.map((item) => {
      if (item.photographerId == idLocation) {
        photos[0].innerHTML += new MediaDisplay().photoLsit(item);
      }
    });

    // *********************************************
    // DropDown Menu

    new DropDown(data);
    // *********************************************
    // *********************************************
    // new LightBoxClass();
    new Likes(data);

    // *********************************************

    // Form
    data.photographers.map((item) => {
      if (item.id == idLocation) {
        modal.innerHTML = new FormModal().modal(item);
      }
    });
  });
//LightBox;
new LightBoxClass();
