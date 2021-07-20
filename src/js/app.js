import createPopover from './createPopover';

const btn = document.querySelector('.popover-btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const popoverEl = document.querySelector('.popover');

  if (popoverEl) {
    popoverEl.remove();
  } else {
    const text = btn.dataset.content;
    const newPopoverEl = createPopover(text);
    const containerEl = document.querySelector('.container');
    containerEl.appendChild(newPopoverEl);

    newPopoverEl.style.top = `${btn.offsetTop - newPopoverEl.clientHeight - 8}px`;
    newPopoverEl.style.left = `${btn.offsetLeft + ((btn.clientWidth - newPopoverEl.clientWidth) / 2)}px`;
  }
});
