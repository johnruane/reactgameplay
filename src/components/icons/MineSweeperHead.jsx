const MineSweeperHead = () => {
  return (
    <svg
      width='600'
      height='749'
      viewBox='0 0 600 749'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g className='bouncing-head'>
        <path
          d='M546.024 26.6289C551.496 20.4182 560.986 19.8142 567.22 25.2799C573.455 30.7456 574.073 40.2112 568.601 46.4219L546.024 26.6289ZM568.601 46.4219C546.446 71.5683 527.215 89.4079 505.325 102.754C483.392 116.126 459.652 124.462 429.223 131.783L422.142 102.658C451.001 95.7145 471.406 88.2984 489.632 77.1864C507.899 66.049 524.84 50.6731 546.024 26.6289L568.601 46.4219Z'
          fill='#838383'
        />
        <ellipse cx='287.549' cy='320.307' rx='287.549' ry='286.59' fill='#080808' />
        <path
          d='M421.062 35.2963C440.621 15.8027 472.332 15.8027 491.891 35.2963L564.588 107.751C584.146 127.244 584.146 158.85 564.588 178.343L538.206 204.637L394.681 61.5897L421.062 35.2963Z'
          fill='#080808'
        />
        <ellipse cx='172.53' cy='261.864' rx='76.6782' ry='76.4227' fill='white' />
        <ellipse cx='409.335' cy='261.864' rx='76.6782' ry='76.4227' fill='white' />
        <ellipse cx='408.638' cy='268.292' rx='36.5135' ry='36.3917' fill='#083F88' />
        <ellipse cx='171.83' cy='268.292' rx='36.5135' ry='36.3917' fill='#083F88' />
      </g>
      <ellipse
        className='bouncing-shadow'
        cx='300'
        cy='718.896'
        rx='242.5'
        ry='30'
        fill='black'
        fillOpacity='0.2'
      />
    </svg>
  );
};

export default MineSweeperHead;
