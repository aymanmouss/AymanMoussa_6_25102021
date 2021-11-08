const card = document.getElementsByClassName("card");
const photos = document.getElementsByClassName("photos");
const idLocation = window.location.search.split("?id=")[1];

// finding the type of the nedia
const mediatype = (data) => {
  if (data.type == "image") {
    return `
            <img src="../medias2/${data.photographerId}/${data.image}" alt="" class="photo">
            `;
  } else {
    return `
            <video controls class="photo">

            <source src="../medias2/${data.photographerId}/${data.video}" type="video/mp4">

            Sorry, your browser doesn't support embedded videos.
        </video>
            `;
  }
};

class photographersPage {
  // photographer card
  cardlist(data) {
    return `
    
        <section class="user-card">
            <article class="photographers-information">
                <h1>${data.name}</h1>
                <p class="location">${data.city}, ${data.country}</p>
                <p class="work">${data.tagline}</p>
                <ul class="tags-card">
                    ${data.tags
                      .map((tag) => {
                        return `<li class="tag">#${tag}</li>`;
                      })
                      .join("")}
                </ul>
            </article>
            <a href="#" class="contact-me" id='btn'>Contactez-moi</a>
        </section>
        <aside class="photo-id">
            <img class="photographers-photo" src="./medias/Photographers ID Photos/${
              data.portrait
            }" alt='${data.name} portrait'>
        </aside>
    `;
  }
  //   Media list
  photoLsit(data) {
    return `
        <article class="photo-card">
            ${mediatype(data)}
            <section class="photo-data">
                <p class="photo-name">${data.title}</p>
                <p class="likes">${data.likes} <i class="fas fa-heart"></i></p>
            </section>
        </article>
      `;
  }
}

fetch("./photographers.json")
  .then((res) => res.json())
  .then((data) => {
    //  photographer Card
    data.photographers.map((item) => {
      if (item.id == idLocation) {
        card[0].innerHTML += new photographersPage().cardlist(item);
      }
    });
    //   Media list
    data.media.map((item) => {
      if (item.photographerId == idLocation) {
        photos[0].innerHTML += new photographersPage().photoLsit(item);
      }
    });
  });
