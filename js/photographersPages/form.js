const contactBtn = document.getElementsByClassName("contact-me");
const modal = document.querySelector(".modal");
const closeBtn = document.getElementsByClassName("closeBtn");
const idLocation = window.location.search.split("?id=")[1];

window.addEventListener("click", (e) => {
  if (e.target.classList.value == "contact-me") {
    modal.classList.remove("displaynone");
  }
  if (e.target.classList.value == "fas fa-times closeBtn") {
    modal.classList.add("displaynone");
  }
});

export default class FormModal {
  modal(data) {
    return `
        <div class="dialog" role="dialog">

        <form method="dialog" id='formModal'>

            <header>
                <h1>Contactez-moi <br> ${data.name}</h1>
                <i class="fas fa-times closeBtn"></i>
            </header>
            <div class="inputData">
                <label for="name">Prénom <br></label>
                <input type="text" id="name" class="input" placeholder="Prénom" >
            </div>
            <div class="inputData">
                <label for="lastname">Nom <br></label>
                <input type="text" id="lastname" class="input" placeholder="Nom">
            </div>
            <div class="inputData">
                <label for="email">Email<br></label>
                <input type="email" id="email" class="input" placeholder="exemple@email.com">
            </div>
            <div class="inputData">
                <label for="message">Votre message<br></label>
                <textarea type='text' id="message"> </textarea>
            </div>
            <input type="submit" value="Envoyer" class="btn-submit">

        </form>
    </div>
        `;
  }
}
