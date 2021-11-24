export default class ImageFactory {
  constructor(data) {
    let eltImage = document.createElement("img");
    eltImage.setAttribute(
      "src",
      `../medias/medias2/${data.photographerId}/${data.image}`
    );
    eltImage.setAttribute("alt", data.description);
    eltImage.setAttribute("role", "button");
    eltImage.className = "photo";
    eltImage.id = data.id;
    return eltImage;
  }
}
