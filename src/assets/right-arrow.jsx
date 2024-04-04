const RightArrow = ({ className }) => (
  <svg
    className={className}
    width='52'
    height='52'
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d_1026_446)'>
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
      d='M30.2071 20.7071C30.5976 20.3166 30.5976 19.6834 30.2071 19.2929L23.8431 12.9289C23.4526 12.5384 22.8195 12.5384 22.4289 12.9289C22.0384 13.3195 22.0384 13.9526 22.4289 14.3431L28.0858 20L22.4289 25.6569C22.0384 26.0474 22.0384 26.6805 22.4289 27.0711C22.8195 27.4616 23.4526 27.4616 23.8431 27.0711L30.2071 20.7071ZM10.5 21H29.5V19H10.5V21Z'
      fill='white'
    />
    <defs>
      <filter
        id='filter0_d_1026_446'
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
          result='effect1_dropShadow_1026_446'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_1026_446'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default RightArrow;
