import Popovers from '../popovers';

test('Popopers show/hide', () => {
  document.body.innerHTML = `
  <div class="button-block">
    <div class="button">
      <button type="button" id="buttonPop" class="btn" data-popover-position='top' data-content="The position of the popovers can be changed using data-popover-position='xxx' in html. (top, right, bottom, left)" data-title="Example popovers">Click to toggle popover</button>
    </div>
  </div>
  `;

  const buttonDom = document.getElementById('buttonPop');

  const popover = new Popovers(buttonDom);
  popover.show();

  const button = document.getElementById('buttonPop');
  button.click();

  const show = document.querySelector('.popover .popover-header');
  expect(show.textContent).toBe('Example popovers');

  button.click();

  const hide = document.querySelector('.popover');
  expect(hide).toBe(null);
});
