const likesPrice = document.getElementsByClassName("likesPrice");

export default class TotalLikes {
  constructor(data) {
    likesPrice[0].innerHTML = `<section class="totalLikes">
                <p class="total"></p>
                <i class="fas fa-heart"></i>
            </section>
            <p class="price">${data.price} / jour</p>`;
  }
}
