import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";


const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      
      <Footer />
    </>
  );
};
export default Main;
