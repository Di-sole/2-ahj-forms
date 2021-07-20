export default function createPopover(text) {
  const popover = document.createElement('div');
  popover.className = 'popover';

  const arrow = document.createElement('div');
  arrow.className = 'arrow';

  const popoverHeader = document.createElement('h3');
  popoverHeader.className = 'popover-header';
  popoverHeader.textContent = 'Popover title';

  const popoverBody = document.createElement('div');
  popoverBody.className = 'popover-body';
  popoverBody.textContent = text;

  popover.appendChild(popoverHeader);
  popover.appendChild(popoverBody);
  popover.appendChild(arrow);

  return popover;
}
