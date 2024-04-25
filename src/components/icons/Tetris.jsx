const Tetris = ({ className }) => {
  return (
    <svg
      width='120'
      height='120'
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M29 7H47.0004V25H29V7ZM51 7H69.0004V25H51V7ZM91.0004 7H73V25H91.0004V7ZM51 29H69.0004V47H51V29ZM69.0004 95H51V113H69.0004V95ZM7 51H25.0004V69H7V51ZM25.0004 73H7V91H25.0004V73ZM29 73H47.0004V91H29V73ZM91.0004 73H73V91H91.0004V73ZM95 73H113V91H95V73ZM25.0004 95H7V113H25.0004V95ZM29 95H47.0004V113H29V95ZM91.0004 95H73V113H91.0004V95ZM95 95H113V113H95V95ZM113 51H95V69H113V51Z'
        fill='white'
      />
    </svg>
  );
};

export default Tetris;
