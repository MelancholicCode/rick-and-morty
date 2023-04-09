import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from './styles/globalStyles';


const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles/>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </>
);