import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { UIContextProvider } from './contexts/UIContext';
import { CartContextProvider } from './contexts/CartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIContextProvider>
      <ThemeProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ThemeProvider>
    </UIContextProvider>
  </StrictMode>
);
