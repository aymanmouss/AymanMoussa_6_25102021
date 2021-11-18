const mediatype = (data) => {
  if (data.type == "image") {
    return `
            <img src="../medias/medias2/${data.photographerId}/${data.image}" alt="" class="photo" id=${data.id}>
            `;
  } else {
    return `
            <video controls class="photo" id=${data.id}>

            <source src="../medias2/${data.photographerId}/${data.video}" type="video/mp4">

            Sorry, your browser doesn't support embedded videos.
        </video>
            `;
  }
};

export default class MediaDisplay {
  // photographer card
  cardlist(data) {
    return `
    
        <section class="user-card">
            <article class="photographers-information">
                <h1 class='test1'>${data.name}</h1>
                <p class="location">${data.city}, ${data.country}</p>
                <p class="work">${data.tagline}</p>
                <ul class="tags-card">
                    ${data.tags
                      .map((tag) => {
                        return `<a <li class="tag" href="./index.html">#${tag}</li></a>`;
                      })
                      .join("")}
                </ul>
            </article>
            <a href="#" class="contact-me"  >Contactez-moi</a>
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
                <p class="likes"> <span class='photoLikes' target=${
                  data.likes
                }> ${data.likes}</span>  
                  <i class="fas fa-heart"></i></p>
            </section>
        </article>
      `;
  }
}
