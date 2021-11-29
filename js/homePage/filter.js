const navList = document.getElementsByClassName("nav-list");
const tagList = document.querySelectorAll(".nav-list a li");
const aList = document.querySelectorAll(".nav-list a");
const photographersId = document.getElementsByClassName("photographers-id");

export default class filter {
  filterTags(data) {
    navList[0].addEventListener("click", (e) => {
      // Keyboard selection
      if (e.target.classList.value !== "active") {
        Array.from(aList).map((item) => {
          if (item.classList.value === "active") {
            item.classList.remove("active");
          }
        });
        // click selection
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
  }
}
