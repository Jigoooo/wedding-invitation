import { useLocation } from 'react-router-dom';

import { RouterNameBase } from '@/shared/enum';

export function useCustomedLocation() {
  const location = useLocation();

  const pathname = location.pathname;
  const locationSplit = pathname.split('/');
  const currentPath = locationSplit[locationSplit.length - 1];

  const isContainedPath = (path: RouterNameBase) => {
    return pathname.indexOf(path) > -1;
  };

  return { location, currentAllPath: pathname, currentPath, isContainedPath };
}
