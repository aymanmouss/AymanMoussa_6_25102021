export default class photographerslist {
  photograph(photograph) {
    return `
      <section class="photographers-id">
      <a href="#" title="Nabeel Bradford">
          <img class="photographers-photo" src="./medias/Photographers ID Photos/${
            photograph.portrait
          }"
              alt='Nabeel Bradford portrait'>
          <h2 class="photographers-name">${photograph.name}</h2>
      </a>
      <p class="photographers-location">${photograph.city}, ${
      photograph.country
    }</p>
      <p class="photographers-work">${photograph.tagline}</p>
      <p class="photographers-price">${photograph.price}/jour</p>
      <ul class="tags">
          <span class="sr-only">tag</span>
          ${photograph.tags
            .map((tag) => `<li class="tag" id='tag2'>#${tag}</li>`)
            .join("")}
      </ul>
      </section>`;
  }
}
