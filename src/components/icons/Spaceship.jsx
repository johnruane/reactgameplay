const Spaceship = ({ className }) => {
  return (
    <svg
      width='236'
      height='197'
      viewBox='0 0 236 197'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M118 20C94.2518 20 75 39.2518 75 63V114H59V90.0001C59 81.1636 51.8366 74.0001 43 74.0001C34.1634 74.0001 27 81.1636 27 90.0001V114H25.5C11.4167 114 0 125.417 0 139.5C0 153.583 11.4167 165 25.5 165H210.5C224.583 165 236 153.583 236 139.5C236 125.92 225.385 114.82 212 114.044V90.0001C212 81.1636 204.837 74.0001 196 74.0001C187.163 74.0001 180 81.1636 180 90.0001V114H161V63C161 39.2518 141.748 20 118 20Z'
        fill='#D82900'
      />
      <rect x='35' y='39.125' width='16' height='16' rx='8' fill='#B1B1B1' />
      <rect x='35' y='2.125' width='16' height='16' rx='8' fill='#B1B1B1' />
      <rect x='188' y='39.125' width='16' height='16' rx='8' fill='#B1B1B1' />
      <rect x='188' y='6.125' width='16' height='16' rx='8' fill='#B1B1B1' />
      <rect x='97' y='49.7422' width='42' height='72' rx='21' fill='#F8D441' />
      <path
        d='M102 16C102 7.16344 109.163 0 118 0V0C126.837 0 134 7.16344 134 16V31H102V16Z'
        fill='#D82900'
      />
      <path
        d='M68 150H167V150C167 175.957 145.957 197 120 197H115C89.0426 197 68 175.957 68 150V150Z'
        fill='#D82900'
      />
    </svg>
  );
};

export default Spaceship;
