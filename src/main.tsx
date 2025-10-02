import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@telefonica/mistica/css/mistica.css';
import App from './App.tsx'
import { getVivoNewSkin, ThemeContextProvider, type ThemeConfig } from '@telefonica/mistica'


const theme: ThemeConfig = {
  skin: getVivoNewSkin(),
  colorScheme: 'light',
  i18n: {
    locale: 'pt-BR',
    phoneNumberFormattingRegionCode: 'BR',
  },
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider theme={theme}>
      <App />
    </ThemeContextProvider>
  </StrictMode>
)