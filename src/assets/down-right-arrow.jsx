const DownRightArrow = ({ className }) => (
  <svg
    className={className}
    width='52'
    height='52'
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d_1026_449)'>
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
      d='M26.7182 27.7182C27.2705 27.7182 27.7182 27.2705 27.7182 26.7182L27.7182 17.7182C27.7182 17.1659 27.2705 16.7182 26.7182 16.7182C26.1659 16.7182 25.7182 17.1659 25.7182 17.7182L25.7182 25.7182L17.7182 25.7182C17.1659 25.7182 16.7182 26.1659 16.7182 26.7182C16.7182 27.2705 17.1659 27.7182 17.7182 27.7182L26.7182 27.7182ZM12.5761 13.9903L26.0111 27.4253L27.4253 26.0111L13.9903 12.5761L12.5761 13.9903Z'
      fill='white'
    />
    <defs>
      <filter
        id='filter0_d_1026_449'
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
          result='effect1_dropShadow_1026_449'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_1026_449'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default DownRightArrow;
