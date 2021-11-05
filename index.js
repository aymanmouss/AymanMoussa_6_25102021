import photographerslist from "./photographerslist.js";

const photographerslist1 =
  document.getElementsByClassName("photographers-list");
const navList = document.getElementsByClassName("nav-list");
const tagList = document.querySelectorAll(".nav-list a li");
const photographersId = document.getElementsByClassName("photographers-id");

fetch("./photographers.json")
  .then((res) => res.json())
  .then((data) => {
    navList[0].addEventListener("click", (e) => {
      if (e.target.classList.value == "") {
        Array.from(tagList).map((item) => {
          if (item.classList.value === "active") {
            item.classList.remove("active");
          }
        });
        e.target.classList.add("active");
      } else {
        e.target.classList.remove("active");
      }
      data.photographers.map((item, i) => {
        if (
          !item.tags.includes(e.target.title) &&
          e.target.classList.value === "active"
        ) {
          photographersId[i].classList.add("displaynone");
        } else {
          photographersId[i].classList.remove("displaynone");
        }
      });
    });

    data.photographers.map((data) => {
      photographerslist1[0].innerHTML += new photographerslist().photograph(
        data
      );
    });
  });
