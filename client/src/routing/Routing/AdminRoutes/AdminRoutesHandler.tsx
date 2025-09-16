
import Navbar from "../../../components/Navbar/Navbar"
import AdminPages from "./AdminPages"


const AdminRoutesHandler = ({ routes }: { routes: string }) => {
    return (
        <div className="w-screen h-96 border ">
            <div className="flex w-[15rem] ">
                Sidebar
            </div>
            <div className="flex flex-col  h-96  border flex-1">
                <Navbar />
                <AdminPages tab={routes} />
            </div>

        </div>
    )
}


export default AdminRoutesHandler
