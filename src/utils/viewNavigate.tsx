const viewNavigate = ({ route, navigate }) => {
  if (!document.startViewTransition) {
    return navigate(route);
  } else {
    return document.startViewTransition(() => {
      navigate(route);
    });
  }
};

export default viewNavigate;
