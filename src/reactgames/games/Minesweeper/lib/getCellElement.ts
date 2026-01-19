export const getCellElement = ({
  boardRef,
  cellPos,
}: {
  boardRef: { current: HTMLDivElement | null } | null;
  cellPos: string;
}): HTMLElement | undefined => {
  if (!boardRef?.current) return;

  const { r, c } = JSON.parse(cellPos) || {};
  const board = boardRef?.current?.childNodes;
  const boardRow = board?.[r].childNodes;
  const cell = boardRow?.[c];

  return cell instanceof HTMLElement ? cell : undefined;
};
