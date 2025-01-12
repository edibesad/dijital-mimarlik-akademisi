export default class ScrollSliderElementModel {
  title: string;
  text: string;
  backgroundImgPath: string;
  imgPath: string;
  constructor(
    title: string,
    text: string,
    imgPath: string,
    backgroundImgPath: string
  ) {
    this.title = title;
    this.text = text;
    this.backgroundImgPath = backgroundImgPath;
    this.imgPath = imgPath;
  }
}
