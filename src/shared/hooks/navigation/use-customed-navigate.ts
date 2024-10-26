import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { NavigateOptions } from 'react-router/dist/lib/context';

import { RouterNameBase } from '@/shared/enum';
import { navigationActions, useNavigationInfos } from '@/shared/stores';
import { useCustomedLocation } from '@/shared/hooks';

export function useCustomedNavigate() {
  const navigate = useNavigate();
  const { currentAllPath, currentPath, isContainedPath } = useCustomedLocation();
  const navInfos = useNavigationInfos();

  useEffect(() => {
    navigationActions.setCurrentPath(currentPath as RouterNameBase);
  }, []);

  useEffect(() => {
    navigationActions.setCurrentAllPath(currentAllPath);
  }, [currentAllPath]);

  const handleNavigate = (routeName: RouterNameBase | string | -1, options?: NavigateOptions) => {
    if (routeName === -1) {
      navigate(routeName);
      navigationActions.setCurrentPath(navInfos.prevRouter as RouterNameBase);
      return;
    }

    navigate(routeName, { viewTransition: false, ...options });
    const routeNameSplit = routeName.split('/');
    const currentRouteName = routeNameSplit[routeNameSplit.length - 1] as RouterNameBase;

    navigationActions.setCurrentPath(currentRouteName);
  };

  return {
    handleNavigate,
    prevRouter: navInfos.prevRouter,
    currentPath,
    currentAllPath,
    isContainedPath,
  };
}
