const Punch = ({ className }) => (
  <svg
    className={className}
    width='52'
    height='52'
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d_1026_452)'>
      <path
        d='M12 -5.24537e-07C5.37258 -2.34843e-07 2.34843e-07 5.37258 5.24537e-07 12L1.22392e-06 28C1.51361e-06 34.6274 5.37259 40 12 40L28 40C34.6274 40 40 34.6274 40 28L40 12C40 5.37258 34.6274 -1.51361e-06 28 -1.22392e-06L12 -5.24537e-07Z'
        fill='#1E342C'
      />
      <path
        d='M12 0.499999C5.64873 0.5 0.5 5.64873 0.500001 12L0.500001 28C0.500002 34.3513 5.64873 39.5 12 39.5L28 39.5C34.3513 39.5 39.5 34.3513 39.5 28L39.5 12C39.5 5.64872 34.3513 0.499998 28 0.499999L12 0.499999Z'
        stroke='white'
      />
    </g>
    <rect x='7.5' y='7.5' width='25' height='25' fill='url(#pattern0_1026_452)' />
    <defs>
      <filter
        id='filter0_d_1026_452'
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
          result='effect1_dropShadow_1026_452'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_1026_452'
          result='shape'
        />
      </filter>
      <pattern
        id='pattern0_1026_452'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use xlinkHref='#image0_1026_452' transform='scale(0.01)' />
      </pattern>
      <image
        id='image0_1026_452'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
);

export default Punch;
