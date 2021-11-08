const btn = document.getElementsByClassName("contact-me");
const modal = document.getElementsByClassName(" modal");
const closeBtn = document.getElementsByClassName("closeBtn");

document.onclick = imodalDisplay;

function imodalDisplay(e) {
  btn[0] = modal[0].classList.remove("displaynone");
}

// closeBtn[0].addEventListener("click", (e) => {
//   modal[0].classList.add("displaynone");
// });

closeBtn[0].addEventListener("click", (e) => {
  modal[0].classList.add("displaynone");
});
