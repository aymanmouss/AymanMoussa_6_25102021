import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./VideoFactory.js";

export default class MediaFactory {
  constructor(data) {
    if (data.type == "image") {
      return new ImageFactory(data);
    } else {
      return new VideoFactory(data);
    }
  }
}
