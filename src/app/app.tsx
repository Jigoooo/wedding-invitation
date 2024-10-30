import '@/app/providers/css';

import { RouterProvider } from 'react-router-dom';
import { NavermapsProvider } from 'react-naver-maps';

import { browserRouter } from '@/app/router';
import {
  LoadingProvider,
  ThemeProvider,
  ErrorProvider,
  AlertProvider,
  QueryProvider,
} from '@/app/providers';

function App() {
  return (
    <ErrorProvider>
      <QueryProvider>
        <NavermapsProvider ncpClientId='s3kv3dfvys'>
          <ThemeProvider>
            <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />
            <LoadingProvider />
            <AlertProvider />
          </ThemeProvider>
        </NavermapsProvider>
      </QueryProvider>
    </ErrorProvider>
  );
}

export default App;
