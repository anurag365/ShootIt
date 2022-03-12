import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";


const Admin = () => {
  return (
    <>
      <Header />
      <Outlet />
      
      <Footer />
    </>
  );
};
export default Admin;
