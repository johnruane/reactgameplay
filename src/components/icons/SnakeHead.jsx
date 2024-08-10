const SnakeHead = ({ className }) => {
  return (
    <svg
      width='600'
      height='862'
      viewBox='0 0 600 862'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g className='bouncing-head'>
        <rect x='270.031' y='609.883' width='65.3757' height='48.2233' fill='#ED1C24' />
        <path
          d='M269.23 611.375L324.594 651.624L292.37 695.77C282.602 709.152 263.819 712.103 250.418 702.361L243.585 697.393C230.183 687.65 227.238 668.904 237.006 655.521L269.23 611.375Z'
          fill='#ED1C24'
        />
        <path
          d='M335.227 611.375L279.863 651.624L312.087 695.77C321.855 709.152 340.638 712.103 354.039 702.361L360.872 697.393C374.274 687.65 377.219 668.904 367.451 655.521L335.227 611.375Z'
          fill='#ED1C24'
        />
        <path
          d='M600 195.654C600.433 758.636 0.178463 748.784 9.16063e-06 195.655C-0.0855936 -69.676 599.803 -59.9283 600 195.654Z'
          fill='#27AE60'
        />
        <ellipse cx='169.888' cy='248.658' rx='86.4157' ry='84.2806' fill='white' />
        <ellipse cx='433.552' cy='248.658' rx='84.9427' ry='84.2806' fill='white' />
        <ellipse cx='433.555' cy='256.995' rx='41.7348' ry='39.6903' fill='#083F88' />
        <ellipse cx='169.891' cy='256.995' rx='40.2618' ry='39.6903' fill='#083F88' />
        <ellipse cx='262.693' cy='471.614' rx='20.1309' ry='20.0901' fill='#1E342C' />
        <ellipse cx='339.283' cy='471.614' rx='20.1309' ry='20.0901' fill='#1E342C' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M130.758 29.426C231.47 -11.133 369.875 -9.46565 470.2 32.5811C459.587 55.6327 387.884 73.4595 301.009 73.4595C210.21 73.4595 135.983 53.9856 130.758 29.426Z'
          fill='#17753F'
        />
      </g>
      <ellipse
        className='bouncing-shadow'
        cx='300'
        cy='832.002'
        rx='242.5'
        ry='30'
        fill='black'
        fillOpacity='0.3'
      />
    </svg>
  );
};

export default SnakeHead;
