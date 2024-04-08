import './Footer.scss';

const Footer = () => {
  return (
    <footer className='grid ft-footer-wrapper'>
      <div className='ft-content-wrapper'>
        <p className='ft-heading'>Hello, I&apos;m John Ruane.</p>
        <p className='ft-text'>I&apos;m a Software Engineer living in Manchester.</p>
        <p className='ft-text'>
          React Gameplay is one of my pet projects, born out of pure passion and
          curiosity. After building a few simple games in React I thought “Wouldn&apos;t
          it be great if I could share these in a way that was useful for other developers
          as a fun way to learn”. That&apos;s when React Gameplay was conceived;
          showcasing React&apos;s capabilities and serving as a learning platform for
          other curious developers.
        </p>
        <p className='ft-text'>
          I hope you enjoy it and find something useful or inspiring within these simple
          lines of code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
