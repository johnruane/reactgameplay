const Snake = ({ className }) => {
  return (
    <svg
      width='95'
      height='40'
      viewBox='0 0 95 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M12 0.499999C5.64872 0.5 0.5 5.64872 0.500001 12L0.500001 28C0.500002 34.3513 5.64873 39.5 12 39.5L83 39.5C89.3513 39.5 94.5 34.3513 94.5 28L94.5 12C94.5 5.64872 89.3513 0.499996 83 0.499996L12 0.499999Z'
        fill='#1E342C'
        stroke='white'
      />
      <text x='5' y='15' fill='#fefefe'>
        CTRL
      </text>
    </svg>
  );
};

export default Snake;
