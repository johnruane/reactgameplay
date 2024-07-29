const ArrowCircleLeft = ({ className }) => {
  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx='50' cy='50' r='50' fill='#1E342C' />
      <path
        d='M35.5858 48.5858C34.8047 49.3668 34.8047 50.6332 35.5858 51.4142L48.3137 64.1421C49.0948 64.9232 50.3611 64.9232 51.1421 64.1421C51.9232 63.3611 51.9232 62.0948 51.1421 61.3137L39.8284 50L51.1421 38.6863C51.9232 37.9052 51.9232 36.6389 51.1421 35.8579C50.3611 35.0768 49.0948 35.0768 48.3137 35.8579L35.5858 48.5858ZM69 48L37 48L37 52L69 52L69 48Z'
        fill='white'
      />
    </svg>
  );
};

export default ArrowCircleLeft;
