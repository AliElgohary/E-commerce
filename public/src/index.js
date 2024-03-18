import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider from Material-UI
import { Provider } from 'react-redux';
import store from './store/store';
import { createTheme } from '@mui/material/styles'; // Import createTheme from Material-UI

// Define a default theme using createTheme
const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Pass the default theme to ThemeProvider */}
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
