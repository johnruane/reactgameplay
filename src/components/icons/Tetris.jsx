const Tetris = ({ className }) => {
  return (
    <svg
      width='111'
      height='110'
      viewBox='0 0 111 110'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect x='23' width='18' height='18' fill='white' />
      <rect x='47' width='18' height='18' fill='white' />
      <rect x='71' width='18' height='18' fill='white' />
      <rect x='47' y='24' width='18' height='18' fill='white' />
      <rect x='47' y='92' width='18' height='18' fill='white' />
      <rect y='44' width='18' height='18' fill='white' />
      <rect y='68' width='18' height='18' fill='white' />
      <rect x='23' y='68' width='18' height='18' fill='white' />
      <rect x='70' y='68' width='18' height='18' fill='white' />
      <rect x='93' y='68' width='18' height='18' fill='white' />
      <rect y='92' width='18' height='18' fill='white' />
      <rect x='23' y='92' width='18' height='18' fill='white' />
      <rect x='70' y='92' width='18' height='18' fill='white' />
      <rect x='93' y='92' width='18' height='18' fill='white' />
      <rect x='93' y='44' width='18' height='18' fill='white' />
    </svg>
  );
};

export default Tetris;
