import { ADMIN_TABS } from "../../../constants/global.constant"
import Login from "../../../pages/admin/Login/Login"
import AdminRoutesHandler from "./AdminRoutesHandler"

const AdminRoutes = [
    {
        path: "/",
        element: <Login />
    },
    ...ADMIN_TABS.map((tab) => {
        return {
            path: tab?.path,
            element: <AdminRoutesHandler routes={tab?.name} />
        }
    })
]

export default AdminRoutes
