import { useCallback } from 'react';

const GetKey = () => {
  return useCallback((location, matches) => {
    let match = matches.find((m) => m.handle?.scrollMode);
    if (match?.handle?.scrollMode === 'pathname') {
      return location.pathname;
    }

    return location.key;
  }, []);
};

export default GetKey;
