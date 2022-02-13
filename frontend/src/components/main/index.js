import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
// import SignUp from "./signup";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <SignUp/> */}
      <Footer />
    </>
  );
};
export default Main;
