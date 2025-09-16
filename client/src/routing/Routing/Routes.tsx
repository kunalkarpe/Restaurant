import { createBrowserRouter } from "react-router-dom"
import AdminRoutes from "./AdminRoutes/AdminRoutes"
import CustomerRoutes from "./CustomerRoutes/CustomerRoutes"


const loggedUserRole = "admin"
const routes = loggedUserRole === "admin" ? AdminRoutes : CustomerRoutes
const globalRoutes = createBrowserRouter([
    {
        path: "/",
        children: routes
    }

])

export default globalRoutes
