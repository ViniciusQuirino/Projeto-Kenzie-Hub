import TechnologysProvider from "./contexts/TechnologysContext";
import GlobalLoading from "./components/GlobalLoading";
import { BrowserRouter } from "react-router-dom";
import Providers from './contexts/UserContext';
import ReactDOM from 'react-dom/client';
import Reset from './reset';
import React from 'react';
import App from './App';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <Providers >
        <TechnologysProvider>
          <GlobalLoading>
            <App />
          </GlobalLoading>
        </TechnologysProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
  
)
