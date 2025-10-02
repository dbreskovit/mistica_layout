import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@telefonica/mistica/css/mistica.css';
import { LoadingScreen } from './Components/LoadingScreen.tsx';
import { getVivoNewSkin, ThemeContextProvider, type ThemeConfig } from '@telefonica/mistica'
import { BrowserRouter, Routes, Route } from 'react-router';

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
    <BrowserRouter>
    <Routes>
    <ThemeContextProvider theme={theme}>
      <Route path='/' element={<LoadingScreen />} />
    </ThemeContextProvider>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)