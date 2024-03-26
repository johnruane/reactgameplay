const Snake = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 100 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <rect width='100%' height='100%' fill='url(#pattern2)' />
        <defs>
          <pattern
            id='pattern2'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use xlinkHref='#image0_1026_607' transform='scale(0.01)' />
          </pattern>
          <image
            id='image0_1026_607'
            width='100%'
            height='100%'
            xlinkHref='data:image/png;base64,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'
          />
        </defs>
      </svg>
    </div>
  );
};

export default Snake;
