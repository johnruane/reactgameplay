export function setOffScreenRight(el) {
  var rect = el.getBoundingClientRect();
  return screen.width - rect.left + el.offsetWidth / 2;
}

export function setOffScreenLeft(el) {
  var rect = el.getBoundingClientRect();
  return -screen.width + rect.left + el.offsetWidth / 2;
}

export function setOffScreenUp(el) {
  var rect = el.getBoundingClientRect();
  return -screen.height + rect.top + el.offsetHeight / 2;
}
