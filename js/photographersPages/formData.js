let firstName = "";
let lastName = "";
let email = "";
let message = "";
const modal = document.querySelector(".modal");
const formModal = document.querySelector("#formModal");

export default class FormData {
  constructor() {
    window.addEventListener("change", (e) => {
      if (e.target.id == "name") {
        firstName = e.target.value;
      }
      if (e.target.id == "lastname") {
        lastName = e.target.value;
      }
      if (e.target.id == "email") {
        email = e.target.value;
      }
      if (e.target.id == "message") {
        message = e.target.value;
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target.classList.value == "btn-submit") {
        console.log(`Prénom :${firstName}`);
        console.log(`Nom :${lastName}`);
        console.log(`Email :${email}`);
        console.log(`Message :${message}`);

        modal.classList.add("displaynone");
      }
    });
    window.addEventListener("keydown", (key) => {
      if (key.code === "Escape") {
        modal.classList.add("displaynone");
      }
    });
  }
}
