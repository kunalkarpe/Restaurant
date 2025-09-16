import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ThemeContext from "./store/ThemeContextProvider.tsx"
import { RouterProvider } from 'react-router-dom'
import globalRoutes from './routing/Routing/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={globalRoutes} />
    {/* // <ThemeContext>
    //   <App />
    // </ThemeContext> */}
  </StrictMode>,
)
