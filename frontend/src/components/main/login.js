import { Card, CardContent } from "@mui/material";
import Swal from "sweetalert2";
import app_config from "../../config";

const Login = () => {
  const url = app_config.api_url;

  const loginform = {
    email: "",
    password: "",
  };

  const loginSubmit = (values) => {
    // 1. address
    // 2. method
    // 3. data
    // 4. data format

    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Loggedin Successfully!!",
        });
      });
  };

  return (
    <div class="container">
      <div class="col-3 mx-auto">
        <Card>
          <CardContent>
            <form class="myform">
              <h3 class="text-center">Login Here</h3>

              <div class="form-floating mt-3">
                <input type="email" class="form-control" placeholder="Email" />
                <label>Email</label>
              </div>

              <div class="form-floating mt-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
                <label>Password</label>
              </div>
              <button class="btn btn-success w-100 mt-3">Confirm</button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
