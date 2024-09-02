import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { StateAppProvider } from './context/stateAppContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateAppProvider>
      <App />
    </StateAppProvider>
  </StrictMode>
);
