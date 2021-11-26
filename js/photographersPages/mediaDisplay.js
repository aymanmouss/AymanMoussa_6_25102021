import MediaFactory from "../Factory/MediaFactory.js";

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
        <a href='#' class='photoLink'>${new MediaFactory(data).outerHTML}</a>
          
            <section class="photo-data">
                <p class="photo-name">${data.title}</p>
                <section class="likes"> 
                <span class='photoLikes' target=${data.likes}> ${
      data.likes
    }</span>  
                 <a href='#' class="fas fa-heart" aria-label="likes" role="button"></a>
                 </section>
            </section>
        </article>
      `;
  }
}
