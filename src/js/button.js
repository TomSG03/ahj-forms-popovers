export default class Popovers {
  constructor(host) {
    this.host = host;
    this.text = host.dataset.content;
    this.title = host.dataset.title;
  }

  show() {
    console.log(this.text);
    console.log(this.title);
  }
}
