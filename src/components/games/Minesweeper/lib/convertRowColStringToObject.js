export const convertRowColStringToObject = (pos) => {
  if (!pos) return;

  const posR = pos.split('|')[0];
  const posC = pos.split('|')[1];

  return { r: posR, c: posC };
};
