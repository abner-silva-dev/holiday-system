import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { StateAppProvider } from './context/stateAppContext.tsx';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

import { PrimeReactProvider } from 'primereact/api';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateAppProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </StateAppProvider>
  </StrictMode>
);
