export default class VideoFactory {
  constructor(data) {
    let eltVideo = document.createElement("video");
    eltVideo.setAttribute("controls", "controls");
    eltVideo.setAttribute(
      "src",
      `../medias/medias2/${data.photographerId}/${data.video}`
    );
    eltVideo.setAttribute("role", "button");
    eltVideo.className = "photo";
    eltVideo.id = data.id;
    return eltVideo;
  }
}
