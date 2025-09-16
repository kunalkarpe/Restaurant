import { CUSTOMER_TABS } from "../../../constants/global.constant"
import Login from "../../../pages/admin/Login/Login"
import CustomerRouteshandler from "./CustomerRouteshandler"

const CustomerRoutes = [
    {
        path: "/",
        element: <Login />
    },
    ...CUSTOMER_TABS.map((tab) => {

        return {
            path: tab?.path,
            element: <CustomerRouteshandler routes={tab?.name} />
        }
    })
]

export default CustomerRoutes
