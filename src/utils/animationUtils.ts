export function setOffScreenRight(el) {
  const rect = el.getBoundingClientRect();
  return screen.width - rect.left + el.offsetWidth / 2;
}

export function setOffScreenLeft(el) {
  const rect = el.getBoundingClientRect();
  return -screen.width + rect.left + el.offsetWidth / 2;
}

export function setOffScreenUp(el) {
  const rect = el.getBoundingClientRect();
  return -screen.height + rect.top + el.offsetHeight / 2;
}
