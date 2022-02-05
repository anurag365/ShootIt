import { Formik } from "formik";
import { useContext } from "react";
import Swal from "sweetalert2";
import app_config from "../config";
import { ProductContext } from "../productcontext";
// import toast from "react-hot-toast";
import "./login.css"
const Login = () => {
    const url = app_config.api_url;
    const {setLoggedIn, setCurrentUser} = useContext(ProductContext)

    const loginform = {
        email : ' ',
        password : ' '
    }

    const loginSubmit =(values) => {
        console.log(values);


        const reqOpt ={
            method: 'POST',
            body: JSON.stringify(values),
            headers:{
                'Content-Type':'application/json'
            }
        }
        fetch(url+'/user/backendlogin', reqOpt)
        .then(res=> {
            if (res.status==200){
                console.log("login success");

                res.json().then((data) => {
                    sessionStorage.setItem("user", JSON.stringify(data));
                    setCurrentUser(data);
                    setLoggedIn(true);

                });
                // toast.success("loggedin successfully");
                Swal.fire({
                    icon:"success",
                    title:"success",
                    text:"login success",
                })
            }else if (res.status==300){
                console.log("login failed");
                Swal.fire({
                    icon:"failed",
                    title:"failed",
                    text:"login failed",
                });
                // toast.error("Login Failed")
            }
        });
    };
    return(
        <div className="login-container container-fluid">
        <div className=" col-10 col-sm-5 col-md-4 col-xl-2 mx-auto">
            <div className="my-card">
        <img className="form-logo" src="logos.png" alt="png" / >
    
        <div className="subheader">
            <span id="active">SIGN IN</span>
            <span>SIGN UP</span>
        </div>

        <Formik initialValues={loginform} onSubmit={loginSubmit}>
            { ({ values,    handleChange , handleSubmit }) => (
                <form onSubmit ={handleSubmit}>
                    <input class="my-input" type="text" placeholder="Username" id="email" onChange={handleChange} value={values.email}/>
        <input class="my-input" type="text" placeholder="Password" id="password" onChange={handleChange} value={values.password}/>

        <div class="remember">
            <input type="checkbox"/>
            <span>Remember me</span>
        </div>
        

        <button type="submit" class="my-btn">Submit</button>

                </form>
            )}
        </Formik>
        <a href="/" class="link">Forgot Password</a>

    </div>
        </div>
     </div>
    )
}
export default Login; 