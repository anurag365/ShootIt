import { Outlet } from "react-router-dom"
import Footer from "../main/footer";
import Header from "../main/header";


const AdminDashboard = () =>{
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
};
export default AdminDashboard;