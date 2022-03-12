import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { Button, Card, CardContent, CardMedia, Grid, Paper, TextField } from '@mui/material'
import app_config from '../../config';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={url + "/" + equipment.thumbnail}
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

  useEffect(() => {
    
    fetchEquipment();
  }, []);

  return (
    <Paper style={{ height: "100vh" }}>
      <div className="container">
        <h1>Equipment List</h1>
        <Grid container spacing={2}>
          {displayEquipment()}
        </Grid>
      </div>
    </Paper>
  );
}

export default BrowseEquipment;