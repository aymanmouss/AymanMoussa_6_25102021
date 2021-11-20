const photo = document.getElementsByClassName("photo");
const lightBox = document.querySelector(".lightBox");
const title = document.getElementsByClassName("photo-name");
let arrPhoto = [];
let currentIndex = 0;

export default class LightBox {
  constructor() {
    window.addEventListener("click", (e) => {
      if (
        e.target.classList.value == "photo" &&
        lightBox.classList.value == "lightBox box"
      ) {
        arrPhoto = [];
        [...photo].map((item) => {
          if (!arrPhoto.includes(item.outerHTML)) {
            arrPhoto.push(item.outerHTML);
          }
        });
        currentIndex = arrPhoto.indexOf(e.target.outerHTML);

        lightBox.classList.remove("box");
        lightBox.innerHTML = `
      <div class='boxPhoto'>
         <i class="fas fa-angle-left"></i>
         ${e.target.outerHTML}
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-times closeBtn closeLightBox"></i>
        </div>
        ${
          e.target.parentElement.parentElement.getElementsByClassName(
            "photo-name"
          )[0].outerHTML
        }
        `;
      }

      // turn to the next media
      if (e.target.classList.value == "fas fa-angle-right") {
        currentIndex += 1;
        if (currentIndex > title.length - 1) {
          currentIndex = title.length - 1;
        }
        lightBox.innerHTML = `
      <div class='boxPhoto'>
         <i class="fas fa-angle-left"></i>
         ${photo[currentIndex].outerHTML}
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-times closeBtn closeLightBox"></i>
        </div>
        ${title[currentIndex].outerHTML}`;
      }

      // return to previous media
      if (e.target.classList.value == "fas fa-angle-left") {
        currentIndex -= 1;
        if (currentIndex < 0) {
          currentIndex = 0;
        }
        lightBox.innerHTML = `
      <div class='boxPhoto'>
         <i class="fas fa-angle-left"></i>
         ${photo[currentIndex].outerHTML}
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-times closeBtn closeLightBox"></i>
        </div>
        ${title[currentIndex].outerHTML}`;
      }
    });
    // Close LightBox onClick
    window.addEventListener("click", (e) => {
      if (e.target.classList.value == "fas fa-times closeBtn closeLightBox") {
        lightBox.classList.add("box");
      }
    });
    window.addEventListener("keydown", (key) => {
      // ARROW RIGHT TO STEP RIGHT
      if (key.code === "ArrowRight") {
        currentIndex += 1;
        if (currentIndex > title.length - 1) {
          currentIndex = title.length - 1;
        }
        lightBox.innerHTML = `
      <div class='boxPhoto'>
         <i class="fas fa-angle-left"></i>
         ${photo[currentIndex].outerHTML}
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-times closeBtn closeLightBox"></i>
        </div>
        ${title[currentIndex].outerHTML}`;
      }
      // ARROW LEFT TO STEP LEFT
      if (key.code === "ArrowLeft") {
        currentIndex -= 1;
        if (currentIndex < 0) {
          currentIndex = 0;
        }
        lightBox.innerHTML = `
      <div class='boxPhoto'>
         <i class="fas fa-angle-left"></i>
         ${photo[currentIndex].outerHTML}
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-times closeBtn closeLightBox"></i>
        </div>
        ${title[currentIndex].outerHTML}`;
      }
      // ESCAPE TO CLOSE
      if (key.code === "Escape") {
        lightBox.classList.add("box");
      }
    });

    // Slect Photo onKeyDown (activate LightBox)

    window.addEventListener("keydown", (e) => {
      if (
        e.target.classList.value == "photoLink" &&
        lightBox.classList.value == "lightBox box" &&
        e.code == "Enter"
      ) {
        arrPhoto = [];
        [...photo].map((item) => {
          if (!arrPhoto.includes(item.outerHTML)) {
            arrPhoto.push(item.outerHTML);
          }
        });
        currentIndex = arrPhoto.indexOf(e.target.outerHTML);

        lightBox.classList.remove("box");
        lightBox.innerHTML = `
      <div class='boxPhoto'>
         <i class="fas fa-angle-left"></i>
         ${e.target.children[0].outerHTML}
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-times closeBtn closeLightBox"></i>
        </div>
        ${
          e.target.parentElement.parentElement.getElementsByClassName(
            "photo-name"
          )[0].outerHTML
        }
        `;
      }
    });
  }
}
