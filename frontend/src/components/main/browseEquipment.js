import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import app_config from "../../config";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BrowseEquipment = () => {
  const url = app_config.api_url;

  const [equipmentData, setEquipmentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEquipment = () => {
    fetch(url + "/equipment/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEquipmentData(data);
        setLoading(false);
      });
  };

  const displayEquipment = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {equipmentData.map((equipment) => (
            <Grid item md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={url + "/uploads/" + equipment.thumbnail}
                  height="200"
                />
                <CardContent>
                  <h4>{equipment.title}</h4>
                  <p>{equipment.description}</p>
                  <Link
                    to={"/view/" + equipment._id}
                    component={Button}
                    variant="contained"
                    color="primary"
                  >
                    View Equipment
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  const showEquipmentGrid = () => {
    return (
      <Container>
        <Grid container>
          <Grid item md={4}>
            <Card>
              <CardMedia
                component="img"
                image={url + "/images/Canon.png"}
              ></CardMedia>
              <CardContent>
                <h2>Canon M50</h2>
                <p>Nice Camera</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <Paper style={{ height: "100vh" }}>
      <header className="bg-warning">
        <Container>
          <h1>Browse Equipment</h1>
          <TextField
            label="Search Equipment"
            variant="outlined"
            className="w-100"
          />
        </Container>
      </header>

      <Container>
        <Grid item md={3}></Grid>
        <Grid item md={9}>
          {displayEquipment()}
        </Grid>
      </Container>
    </Paper>
  );
};

export default BrowseEquipment;
