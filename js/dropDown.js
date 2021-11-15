const slected = document.getElementsByClassName("slected");
const dropDownMenu = document.getElementById("dropDown-menu");
const slect = document.getElementsByClassName("slect");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");

const toggle = () => {
  [...slect].map((item) => {
    item.classList.toggle("hiden");
    dropDownMenu.classList.add("active");
  });
};
slected[0].addEventListener("click", (e) => {
  toggle();
  if (two.classList == "slect") {
    one.innerHTML = `Popularité <i class="fas fa-chevron-down"></i>`;
  } else {
    one.innerHTML = `Popularité <i class="fas fa-chevron-up"></i>`;
  }

  two.innerText = "Date";
  three.innerText = "Titre";
});
window.addEventListener("click", (e) => {
  if (e.target.id == "2") {
    one.innerHTML = `Date <i class="fas fa-chevron-up"></i>`;
    toggle();
  }
  if (e.target.id == "3") {
    one.innerHTML = `Titre <i class="fas fa-chevron-up"></i>`;
    toggle();
  }
});

const photoCard = document.getElementsByClassName("photo-card");
let cardphoto = [];

Array.from(photoCard).map((item) => {
  item.outerHTML;
});
