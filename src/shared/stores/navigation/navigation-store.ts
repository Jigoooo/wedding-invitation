import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

import { RouterNameBase } from '@/shared/enum';

interface NavigationStates {
  navigationInfos: {
    prevRouter: RouterNameBase | '';
    currentRouter: RouterNameBase | '';
    currentRouterAllPath: string;
  };
  backInfos: {
    depth: number;
    backHandler: () => void;
  };
}

interface NavigationActions {
  setCurrentPath: (currentRouter: RouterNameBase) => void;
  setCurrentAllPath: (currentRouterAllPath: string) => void;
  setBackHandler: (depth: number, backHandler: () => void) => void;
}

interface NavigationStore extends NavigationStates {
  actions: NavigationActions;
}

const navigationInitialState: NavigationStates = {
  navigationInfos: {
    prevRouter: '',
    currentRouter: '',
    currentRouterAllPath: '',
  },
  backInfos: {
    depth: 0,
    backHandler: () => {},
  },
};

const useNavigationStore = create<NavigationStore>()((setState, getState) => {
  return {
    ...navigationInitialState,
    actions: {
      setCurrentPath: (currentRouter) => {
        setState((prevState) => {
          return {
            ...prevState,
            navigationInfos: {
              ...prevState.navigationInfos,
              prevRouter: getState().navigationInfos.currentRouter,
              currentRouter,
            },
          };
        });
      },
      setCurrentAllPath: (currentRouterAllPath) => {
        setState((prevState) => {
          return {
            ...prevState,
            navigationInfos: {
              ...prevState.navigationInfos,
              currentRouterAllPath,
            },
          };
        });
      },
      setBackHandler: (depth, backHandler) => {
        setState((prevState) => {
          return {
            ...prevState,
            backInfos: {
              ...prevState.backInfos,
              depth,
              backHandler,
            },
          };
        });
      },
    },
  };
});

export const useNavigationInfos = () => useNavigationStore(useShallow((state) => state.navigationInfos));
export const useBackInfos = () => useNavigationStore(useShallow((state) => state.backInfos));

export const navigationActions = useNavigationStore.getState().actions;
