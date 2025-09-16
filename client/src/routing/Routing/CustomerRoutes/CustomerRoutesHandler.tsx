import Navbar from '../../../components/Navbar/Navbar'
import CustomerPages from './CustomerPages'

const CustomerRouteshandler = ({ routes }: { routes: string }) => {
    console.log(routes)
    return (
        <div className="w-screen h-screen border ">
            <Navbar />
            <CustomerPages tab={routes} />

        </div>
    )
}

export default CustomerRouteshandler
