const total = document.getElementsByClassName("total");
const idLocation = window.location.search.split("?id=")[1];
let arr = [];

export default class Likes {
  constructor(data) {
    data.media.map((item) => {
      if (item.photographerId == idLocation) {
        arr.push(item.likes);
      }
    });
    let sum = arr.reduce((a, b) => a + b, 0);

    total[0].innerHTML = sum;

    window.addEventListener("click", (e) => {
      const likesNumber = e.target.previousElementSibling;
      if (e.target.className == "fas fa-heart") {
        likesNumber.innerHTML =
          parseInt(likesNumber.getAttribute("target")) + 1;
        e.target.classList.add("liked");
        sum += 1;
        total[0].innerHTML = sum;
      } else {
        if (e.target.className == "fas fa-heart liked") {
          likesNumber.innerHTML = likesNumber.getAttribute("target");
          e.target.classList.remove("liked");
          sum -= 1;
          total[0].innerHTML = sum;
        }
      }
    });
  }
}
