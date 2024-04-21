const DownArrow = ({ className }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1.455 15.0264C0.651427 15.8079 0.651426 17.0749 1.455 17.8564L15.999 32.001L18.909 29.1709L4.36501 15.0264C3.56143 14.2449 2.25858 14.2449 1.455 15.0264V15.0264Z'
        fill='#1E342C'
      />
      <path
        d='M30.5477 15.0234C29.7447 14.2425 28.4428 14.2425 27.6398 15.0234L13.0907 29.1728L15.9987 32.001L30.5477 17.8516C31.3508 17.0706 31.3508 15.8044 30.5477 15.0234V15.0234Z'
        fill='#1E342C'
      />
      <rect x='18' width='30' height='4' transform='rotate(90 18 0)' fill='#1E342C' />
    </svg>
  );
};

export default DownArrow;
