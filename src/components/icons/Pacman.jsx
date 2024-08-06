const Pacman = () => (
  <svg
    width='600'
    height='773'
    viewBox='0 0 600 773'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g className='pacman-body'>
      <path
        d='M600 300.679C600 350.815 600 524.894 600 567.413C545.651 567.413 405.31 567.413 289.648 567.413C173.986 567.413 61.4405 567.413 0.00219246 567.413C-0.00250853 541.022 0.001813 350.815 0.001813 300.679C0.001813 134.618 134.316 0 300.001 0C465.686 0 600 134.618 600 300.679Z'
        fill='#26E7CE'
      />
      <ellipse cx='152.633' cy='276.114' rx='79.8594' ry='80.0403' fill='white' />
      <ellipse cx='398.352' cy='273.275' rx='79.8594' ry='80.0403' fill='white' />
      <ellipse cx='397.881' cy='275.643' rx='37.8032' ry='37.8889' fill='#083F88' />
      <ellipse cx='152.159' cy='275.643' rx='37.8032' ry='37.8889' fill='#083F88' />
      <path
        d='M167 567H266V639.5C266 666.838 243.838 689 216.5 689C189.162 689 167 666.838 167 639.5V567Z'
        fill='#26E7CE'
      />
      <path
        d='M334 567H433V639.5C433 666.838 410.838 689 383.5 689C356.162 689 334 666.838 334 639.5V567Z'
        fill='#26E7CE'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M334 567H266V632.325C266 614.286 281.222 599.662 300 599.662C318.778 599.662 334 614.286 334 632.325V567Z'
        fill='#26E7CE'
      />
      <path
        d='M501 567H600V639.5C600 666.838 577.838 689 550.5 689C523.162 689 501 666.838 501 639.5V567Z'
        fill='#26E7CE'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M501 567H433V632.325C433 614.286 448.222 599.662 467 599.662C485.778 599.662 501 614.286 501 632.325V567Z'
        fill='#26E7CE'
      />
      <path
        d='M0 567H99V639.5C99 666.838 76.8381 689 49.5 689C22.1619 689 0 666.838 0 639.5V567Z'
        fill='#26E7CE'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M167 567H99V632.325C99 614.286 114.222 599.662 133 599.662C151.778 599.662 167 614.286 167 632.325V567Z'
        fill='#26E7CE'
      />
    </g>
    <ellipse
      className='pacman-shadow'
      cx='300'
      cy='743'
      rx='285'
      ry='30'
      fill='black'
      fillOpacity='0.5'
    />
  </svg>
);

export default Pacman;
