import { createBrowserRouter } from 'react-router-dom';

import { RouterName } from '@/shared/enum';
import { RouteErrorPage } from '@/shared/components';
import { Invitation, InvitationCallInfo } from '@/pages/invitation';

export const browserRouter = createBrowserRouter([
  {
    path: RouterName.INVITATION,
    element: <Invitation />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        path: RouterName.CALL_INFO,
        element: <InvitationCallInfo />,
      },
    ],
  },
]);
