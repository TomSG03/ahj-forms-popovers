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

    const arrow = document.createElement('div');
    arrow.className = 'arrow';

    this.popover.appendChild(arrow);
    this.popover.appendChild(popoverHead);
    this.popover.appendChild(popoverBody);

    this.host.closest('.button').append(this.popover);
    this.setPopoverPosition();
  }

  setPopoverPosition() {
    const arrow = this.popover.querySelector('.arrow');
    switch (this.host.dataset.popoverPosition) {
      case 'top':
        this.popover.style.top = `${(this.host.offsetTop - this.popover.offsetHeight) - 15}px`;
        this.popover.style.left = `${this.host.offsetLeft + this.host.offsetWidth / 2 - this.popover.offsetWidth / 2}px`;
        arrow.style.left = 'calc(50% - 10px)';
        arrow.style.top = `${this.popover.offsetHeight - 3}px`;
        arrow.classList.add('top');
        break;
      case 'right':
        this.popover.style.top = `${this.host.offsetTop + this.host.offsetHeight / 2 - this.popover.offsetHeight / 2}px`;
        this.popover.style.left = `${this.host.offsetLeft + this.host.offsetWidth + 15}px`;
        arrow.style.left = '-21px';
        arrow.style.top = 'calc(50% - 10px)';
        arrow.classList.add('right');
        break;
      case 'bottom':
        this.popover.style.top = `${this.host.offsetTop + this.host.offsetHeight + 15}px`;
        this.popover.style.left = `${this.host.offsetLeft + this.host.offsetWidth / 2 - this.popover.offsetWidth / 2}px`;
        arrow.style.left = 'calc(50% - 10px)';
        arrow.style.top = `${-15}px`;
        arrow.classList.add('bottom');
        break;
      case 'left':
        this.popover.style.top = `${this.host.offsetTop + this.host.offsetHeight / 2 - this.popover.offsetHeight / 2}px`;
        this.popover.style.left = `${this.host.offsetLeft - this.popover.offsetWidth - 15}px`;
        arrow.style.left = `${this.popover.offsetWidth - 8}px`;
        arrow.style.top = 'calc(50% - 10px)';
        arrow.classList.add('left');
        break;
      default:
        this.popover.style.top = `${(this.host.offsetTop - this.popover.offsetHeight) - 15}px`;
        this.popover.style.left = `${this.host.offsetLeft - Math.abs((this.host.offsetWidth - this.popover.offsetWidth) / 2)}px`;
        arrow.style.left = 'calc(50% - 10px)';
        arrow.style.top = `${this.popover.offsetHeight - 3}px`;
        arrow.classList.add('top');
        break;
    }
  }
}
