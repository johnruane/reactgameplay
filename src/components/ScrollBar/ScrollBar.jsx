import './ScrollBar.scss';

const ScrollBar = ({text}) => {
  return (
    <div className={`sb-scrollbar sb-${text}`}/>
  )
}

export default ScrollBar;