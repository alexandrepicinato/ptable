import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageProvider from './hooks/page';
import SelectedElementProvider from './hooks/selectedIten';
import FiltrerDataProvider from './hooks/filtrer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageProvider>
      <SelectedElementProvider>
        <FiltrerDataProvider>
          <App />
        </FiltrerDataProvider>
      </SelectedElementProvider>
    </PageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
