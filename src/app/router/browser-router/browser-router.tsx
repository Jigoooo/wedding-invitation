import { createBrowserRouter } from 'react-router-dom';

import { RouterName } from '@/shared/enum';
import { RouteErrorPage } from '@/shared/components';
import { MainLayout } from '@/pages/main-layout';
import { Invitation } from '@/pages/invitation';

export const browserRouter = createBrowserRouter([
  {
    path: RouterName.MAIN,
    element: <MainLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        path: RouterName.INVITATION,
        element: <Invitation />,
      },
    ],
  },
]);
