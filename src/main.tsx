import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@telefonica/mistica/css/mistica.css';
import { ThemeContextProvider } from '@telefonica/mistica'
import { RouterProvider } from "react-router/dom";
import { router } from "./routes";
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>
)