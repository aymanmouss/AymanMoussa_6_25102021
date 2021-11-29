const total = document.getElementsByClassName("total");
const idLocation = window.location.search.split("?id=")[1];
let arr = [];
let likesNumber = null;
export default class Likes {
  constructor(data) {
    data.media.map((item) => {
      if (item.photographerId == idLocation) {
        arr.push(item.likes);
      }
    });
    // Total Likes
    let sum = arr.reduce((a, b) => a + b, 0);

    total[0].innerHTML = sum;

    window.addEventListener("click", (e) => {
      if (e.target.className == "fas fa-heart") {
        likesNumber = e.target.previousElementSibling;
        e.preventDefault();
        likesNumber.innerHTML = parseInt(likesNumber.innerText) + 1;
        e.target.classList.add("liked");
        sum += 1;
        total[0].innerHTML = sum;
      } else {
        if (e.target.className == "fas fa-heart liked") {
          e.preventDefault();
          likesNumber.innerHTML = parseInt(likesNumber.innerText) - 1;
          e.target.classList.remove("liked");
          sum -= 1;
          total[0].innerHTML = sum;
        }
      }
    });
    window.addEventListener("keypress", (e) => {
      const likesNumber = e.target.previousElementSibling;
      if (e.target.className == "fas fa-heart" && e.code === "Enter") {
        likesNumber.innerHTML = parseInt(likesNumber.innerText) + 1;
        e.target.classList.add("liked");
        sum += 1;
        total[0].innerHTML = sum;
      } else {
        if (e.target.className == "fas fa-heart liked" && e.code == "Enter") {
          likesNumber.innerHTML = parseInt(likesNumber.innerText) - 1;
          e.target.classList.remove("liked");
          sum -= 1;
          total[0].innerHTML = sum;
        }
      }
    });
  }
}
