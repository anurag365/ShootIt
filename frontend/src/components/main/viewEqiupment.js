import { Card, CardContent, Grid, Container, Button } from "@mui/material";

import React from "react";
import app_config from "../../config";
import "../../index.css";
const ViewEqiupment = () => {
  const url = app_config.api_url;

  return (
    <>
      <Container className="mt-5">
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} className="pricingcard">
                <h1>Cannon M50 MK2</h1>
                <p>
                  Lightweight and stylish, the EOS M50 Mark II is fun and easy
                  to use with Wi-Fi connectivity for content creators to stay
                  close to your audience at all times. Keep your social media
                  feeds lit with high-quality visual storytelling in 4K and
                  accurate eye and face detection autofocusing. Bring your
                  favourite memories to life in glorious 4K video resolution on
                  the EOS M50 Mark II. With an approximately 24.1-megapixel CMOS
                  sensor, the EOS M50 Mark II captures fine details and
                  life-like colours better than your typical smartphone.
                </p>
                <Button className="pricebtn" variant="contained">
                  Price ${" "}
                </Button>
              </Grid>
              <Grid item  md={4} >
                <img src={url + "/images/cannon.jpeg"}  />   
              </Grid>
              <Grid item md={2}>
              <h3>xs=2</h3>
                <Grid>
                <h3>xs=2</h3>
              </Grid>
              </Grid>
              
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default ViewEqiupment;
