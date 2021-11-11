const photo = document.getElementsByClassName("photo");
const lightBox = document.querySelector(".lightBox");
const title = document.getElementsByClassName("photo-name");
let x = 0;
let y = 0;

// Next photo
const nextReset = () => {
  if (photo.length - 2 == x) {
    return (x = photo.length - 2);
  } else {
    return (x += 1);
  }
};
//  Previous photo
const previousReset = () => {
  if (x == 0) {
    return (x = 0);
  } else {
    return (x -= 1);
  }
};
const nextTitle = () => {
  if (photo.length - 2 == y) {
    return (y = photo.length - 2);
  } else {
    return (y += 1);
  }
};
//  Previous photo
const previousTitle = () => {
  if (y == 0) {
    return (y = 0);
  } else {
    return (y -= 1);
  }
};
window.onload = () => {
  // Open Light Box modal
  Array.from(photo).map((item, i) => {
    item.addEventListener("click", (e) => {
      lightBox.classList.remove("box");
      lightBox.innerHTML = `
      <div class='boxPhoto'>
         <i class="fas fa-angle-left"></i>
         ${item.outerHTML}
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-times closeBtn closeLightBox"></i>
        </div>
   ${
     item.parentElement.parentElement.getElementsByClassName("photo-name")[i]
       .outerHTML
   } 
        `;
      x = i;
      y = i;
    });
  });
  // next photo
  window.addEventListener("click", (e) => {
    if (e.target.classList.value == "fas fa-angle-right") {
      lightBox.innerHTML = ` 
      <div class='boxPhoto'>
      <i class="fas fa-angle-left"></i>
      ${photo[nextReset()].outerHTML}
     <i class="fas fa-angle-right"></i>
     <i class="fas fa-times closeBtn closeLightBox"></i>
     </div>
     ${title[nextTitle()].outerHTML} 
      `;
    }
  });

  //  previous photo
  window.addEventListener("click", (e) => {
    if (e.target.classList.value == "fas fa-angle-left") {
      lightBox.innerHTML = `
      <div class='boxPhoto'>
      <i class="fas fa-angle-left"></i>
      ${photo[previousReset()].outerHTML}
     <i class="fas fa-angle-right"></i>
     <i class="fas fa-times closeBtn closeLightBox"></i>
     </div>
     ${title[previousTitle()].outerHTML} 
      `;
    }
  });

  //  previous photo with Escape key
  document.addEventListener("keyup", (e) => {
    if (e.keyCode == "37") {
      lightBox.innerHTML = `
      <div class='boxPhoto'>
      <i class="fas fa-angle-left"></i>
      ${photo[previousReset()].outerHTML}
     <i class="fas fa-angle-right"></i>
     <i class="fas fa-times closeBtn closeLightBox"></i>
     </div>
     ${title[previousTitle()].outerHTML} 
        `;
    }
  });
  // next photo with keypress
  document.addEventListener("keyup", (e) => {
    if (e.keyCode == "39") {
      lightBox.innerHTML = `
      <div class='boxPhoto'>
      <i class="fas fa-angle-left"></i>
      ${photo[nextReset()].outerHTML}
     <i class="fas fa-angle-right"></i>
     <i class="fas fa-times closeBtn closeLightBox"></i>
     </div>
     ${title[nextTitle()].outerHTML} 
        `;
    }
  });

  // Close LightBox onClick
  window.addEventListener("click", (e) => {
    if (e.target.classList.value == "fas fa-times closeBtn closeLightBox") {
      lightBox.classList.add("box");
    }
  });

  // Close LightBox with Escape key
  window.addEventListener("keyup", (e) => {
    if (e.keyCode == "27") {
      lightBox.classList.add("box");
    }
  });
};
