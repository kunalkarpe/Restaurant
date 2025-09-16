import { lazy } from "react"

// const Login = lazy(() => import("../../../pages/admin/Login/Login"))
const Theme = lazy(() => import("../../../pages/admin/Theme/Theme"))
const AdminPages = ({ tab }: { tab: string }) => {
    switch (tab.toLowerCase()) {
        case "theme":
            return <Theme />
    }
}

export default AdminPages
