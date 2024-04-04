const DownArrow = ({ className }) => (
  <svg
    width='52'
    height='52'
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <g filter='url(#filter0_d_1026_443)'>
      <path
        d='M12 -5.24537e-07C5.37258 -2.34843e-07 2.34843e-07 5.37258 5.24537e-07 12L1.22392e-06 28C1.51361e-06 34.6274 5.37259 40 12 40L28 40C34.6274 40 40 34.6274 40 28L40 12C40 5.37258 34.6274 -1.51361e-06 28 -1.22392e-06L12 -5.24537e-07Z'
        fill='#1E342C'
      />
      <path
        d='M12 0.499999C5.64873 0.5 0.5 5.64873 0.500001 12L0.500001 28C0.500002 34.3513 5.64873 39.5 12 39.5L28 39.5C34.3513 39.5 39.5 34.3513 39.5 28L39.5 12C39.5 5.64872 34.3513 0.499998 28 0.499999L12 0.499999Z'
        stroke='white'
      />
    </g>
    <path
      d='M19.2929 29.7071C19.6834 30.0976 20.3166 30.0976 20.7071 29.7071L27.0711 23.3431C27.4616 22.9526 27.4616 22.3195 27.0711 21.9289C26.6805 21.5384 26.0474 21.5384 25.6569 21.9289L20 27.5858L14.3431 21.9289C13.9526 21.5384 13.3195 21.5384 12.9289 21.9289C12.5384 22.3195 12.5384 22.9526 12.9289 23.3431L19.2929 29.7071ZM19 10L19 29L21 29L21 10L19 10Z'
      fill='white'
    />
    <defs>
      <filter
        id='filter0_d_1026_443'
        x='0'
        y='0'
        width='52'
        height='52'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx='8' dy='8' />
        <feGaussianBlur stdDeviation='2' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.898039 0 0 0 0 0.329412 0 0 0 0 0.588235 0 0 0 0.6 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1026_443'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_1026_443'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default DownArrow;
