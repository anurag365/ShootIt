import { Outlet } from "react-router-dom"
import Footer from "../main/footer";
import Header from "../main/header";


const UserDashboard = () =>{
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            </>
    )
};
export default UserDashboard;