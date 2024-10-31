import { createBrowserRouter } from 'react-router-dom';

import { RouterName } from '@/shared/enum';
import { RouteErrorPage } from '@/shared/components';
import { Invitation } from '@/pages/invitation';

export const browserRouter = createBrowserRouter([
  {
    path: RouterName.INVITATION,
    element: <Invitation />,
    errorElement: <RouteErrorPage />,
  },
]);
