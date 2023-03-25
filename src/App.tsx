import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';

const App = () => {
  return (
    // Vide arquivos src/routes/routes.tsx
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
