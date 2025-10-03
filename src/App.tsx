import { ThemeContextProvider, ResponsiveLayout } from "@telefonica/mistica"
import { RouterProvider } from "react-router-dom"
import { theme } from './theme.ts'
import { router } from "./routes";
import '@telefonica/mistica/css/mistica.css';



export default function App() {
  return (
    <ThemeContextProvider theme={theme}>
      <ResponsiveLayout>
        <RouterProvider router={router} />
      </ResponsiveLayout>
    </ThemeContextProvider>
  )
}
