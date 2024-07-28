const MineSweeper = ({ className }) => {
  return (
    <svg
      width='46'
      height='48'
      viewBox='0 0 46 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M44 25C44 36.598 34.598 46 23 46C11.402 46 2 36.598 2 25C2 13.402 11.402 4 23 4C34.598 4 44 13.402 44 25Z'
        stroke='white'
        strokeWidth='4'
      />
      <path
        d='M38.0446 3.14453C38.5968 2.18795 38.2691 0.964765 37.3125 0.41248C36.3559 -0.139804 35.1327 0.187946 34.5804 1.14453L38.0446 3.14453ZM34.5804 1.14453L32.1594 5.33792L35.6235 7.33792L38.0446 3.14453L34.5804 1.14453Z'
        fill='white'
      />
    </svg>
  );
};

export default MineSweeper;
