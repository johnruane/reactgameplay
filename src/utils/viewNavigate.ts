const viewNavigate = ({ route, navigate, resetScroll = false }) => {
  if (!document.startViewTransition) {
    return navigate(route);
  } else {
    return document.startViewTransition(() => {
      if (resetScroll) {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }
      navigate(route);
    });
  }
};

export default viewNavigate;
