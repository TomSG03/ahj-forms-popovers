export default class Popovers {
  constructor(host) {
    this.host = host;
    this.text = host.dataset.content;
    this.title = host.dataset.title;
  }

  show() {
    this.host.addEventListener('click', (e) => {
      if (e.target.closest('.button').querySelector('.popover') === null) {
        this.createPopover();
      } else {
        e.target.closest('.button').querySelector('.popover').remove();
      }
    });
  }

  createPopover() {
    this.popover = document.createElement('div');
    this.popover.className = 'popover';

    const popoverHead = document.createElement('h3');
    popoverHead.className = 'popover-header';
    popoverHead.textContent = this.title;

    const popoverBody = document.createElement('div');
    popoverBody.className = 'popover-body';
    popoverBody.textContent = this.text;

    this.popover.appendChild(popoverHead);
    this.popover.appendChild(popoverBody);

    this.host.closest('.button').append(this.popover);
    this.setPopoverPosition();
  }

  setPopoverPosition() {
    switch (this.host.dataset.popoverPosition) {
      case 'top':
        this.popover.style.top = `${(this.host.offsetTop - this.popover.offsetHeight) - 15}px`;
        this.popover.style.left = `${this.host.offsetLeft - Math.abs((this.host.offsetWidth - this.popover.offsetWidth) / 2)}px`;
        break;
      case 'right':
        this.popover.style.top = `${(this.host.offsetTop - Math.abs((this.host.offsetHeight - this.popover.offsetHeight) / 2))}px`;
        this.popover.style.left = `${this.host.offsetLeft + this.host.offsetWidth + 15}px`;
        break;
      case 'bottom':
        this.popover.style.top = `${this.host.offsetTop + this.host.offsetHeight + 15}px`;
        this.popover.style.left = `${this.host.offsetLeft - Math.abs((this.host.offsetWidth - this.popover.offsetWidth) / 2)}px`;
        break;
      case 'left':
        this.popover.style.top = `${(this.host.offsetTop - Math.abs((this.host.offsetHeight - this.popover.offsetHeight) / 2))}px`;
        this.popover.style.left = `${this.host.offsetLeft - this.popover.offsetWidth - 15}px`;
        break;
      default:
        this.popover.style.top = `${(this.host.offsetTop - this.popover.offsetHeight) - 15}px`;
        this.popover.style.left = `${this.host.offsetLeft - Math.abs((this.host.offsetWidth - this.popover.offsetWidth) / 2)}px`;
        break;
    }
  }
}
