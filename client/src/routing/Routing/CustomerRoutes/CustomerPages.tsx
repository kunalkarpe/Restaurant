import { lazy } from "react"

const Home = lazy(() => import("../../../pages/customer/Home/Home"))
const CustomerPages = ({ tab }: { tab: string }) => {
    switch (tab.toLowerCase()) {
        case "home":
            return <Home />
    }
}

export default CustomerPages
