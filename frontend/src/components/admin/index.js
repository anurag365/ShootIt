import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
// import SignUp from "./signup";

const Admin = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <SignUp/> */}
      <Footer />
    </>
  );
};
export default Admin;
