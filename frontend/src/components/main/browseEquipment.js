import React from "react";
import { Formik } from "formik";
import { Button, Card, CardContent, TextField } from "@mui/material";
import app_config from "../../config";
import Swal from "sweetalert2";

const BrowseEquipment = () => {
  const url = app_config.api_url;
  const equipmentform = {
    title: "",
    tags: "",
    thumbnail: "",
    description: "",
    rentableField: false,
  };

  const searchEquipment = (values) => {
    fetch(url + "/equipment/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully!!",
        });
      });
  };

  return (
    <div class="container mt-5">
      <Card>
        <CardContent>
          <div class="card">
            <div class="row">
              <div class="col-md">
                <div class="img-back"></div>
              </div>

              <div class="col-md">
                <div class="card-body my-card-body">
                  <p class="h3">Search Equipment</p>
                  <p class="text-muted">Search equipment here</p>

                  <hr />

                  <Formik
                    initialValues={equipmentform}
                    onSubmit={searchEquipment}
                  >
                    {({ values, handleSubmit, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          className="w-100 mt-5"
                          variant="filled"
                          id="title"
                          type="text"
                          label="Equipment Name"
                          onChange={handleChange}
                          value={values.title}
                        />

                        <TextField
                          className="w-100 mt-3"
                          id="type"
                          type="text"
                          label="Type"
                          onChange={handleChange}
                          value={values.tags}
                        ></TextField>

                        <Button
                          type="submit"
                          color="primary"
                          variant="contained"
                          className="mt-5 w-50"
                        >
                          Search Equipment
                        </Button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrowseEquipment;
