import { StrictMode } from "react"
import { ThemeContextProvider } from "@telefonica/mistica"
import { RouterProvider } from "react-router-dom"
import theme from './theme.ts'
import { router } from "./routes";
import '@telefonica/mistica/css/mistica.css';


function App() {
  return (
    <>
    <StrictMode>
      <ThemeContextProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </StrictMode>
    </>
      
  )
}

export default App


