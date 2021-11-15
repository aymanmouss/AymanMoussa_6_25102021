const navList = document.getElementsByClassName("nav-list");
const tagList = document.querySelectorAll(".nav-list a li");
const photographersId = document.getElementsByClassName("photographers-id");

export default class filter {
  filterTags(data) {
    return navList[0].addEventListener("click", (e) => {
      if (e.target.classList.value !== "active") {
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
