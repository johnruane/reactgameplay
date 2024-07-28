const Snake = ({ className }) => {
  return (
    <svg
      width='45'
      height='42'
      viewBox='0 0 45 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M43 2L32.689 2C27.1661 2 22.689 6.47715 22.689 12L22.689 29.5833C22.689 35.1062 18.2118 39.5833 12.689 39.5833L2 39.5833'
        stroke='white'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Snake;
