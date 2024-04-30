import './Button.scss';

const Button = ({ text, onClickCallback }) => {
  return (
    <button className='button' onClick={onClickCallback}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
