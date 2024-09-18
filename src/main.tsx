import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { StateAppProvider } from './context/stateAppContext.tsx';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

import { PrimeReactProvider } from 'primereact/api';

// import 'primeflex/primeflex.css';
// import 'primereact/resources/primereact.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateAppProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </StateAppProvider>
  </StrictMode>
);

{
  /* <input
  class="p-inputtext p-component p-inputtext p-component"
  type="text"
  role="combobox"
  readonly=""
  autocomplete="off"
  aria-expanded="false"
  aria-autocomplete="none"
  aria-haspopup="dialog"
  aria-controls="pr_id_5_panel"
  inputmode="none"
  data-pc-name="inputtext"
  data-pc-section="root"
></input>; */
}
