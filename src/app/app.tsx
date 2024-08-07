import '@/app/providers/css';

import { RouterProvider } from 'react-router-dom';

import { browserRouter } from '@/app/router';
import {
  LoadingProvider,
  ThemeProvider,
  ErrorProvider,
  QueryProvider,
  AlertProvider,
} from '@/app/providers';

function App() {
  return (
    <ErrorProvider>
      <QueryProvider>
        <ThemeProvider>
          <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />
          <LoadingProvider />
          <AlertProvider />
        </ThemeProvider>
      </QueryProvider>
    </ErrorProvider>
  );
}

export default App;
