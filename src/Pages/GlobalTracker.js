import React from "react";

import { Chart } from "../Components";
import { Grid } from "@material-ui/core";
import Countup from "react-countup";
import "./GlobalTracker.css";

const GlobalTracker = ({ data, country }) => {
  const cards = country ? (
    <Grid
      container
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={6} md={3} className="box">
        <div className="box-text">
          <div className="box-text-main"> Confirmed Cases</div>
          <div className="box-text-date">
            {new Date(data.lastUpdate).toDateString()}
          </div>
          <div className="box-text-value-a">
            <Countup
              start={0}
              end={data.confirmed.value}
              duration="1"
              separator=","
            ></Countup>
          </div>
          <div>No of Confirmed Cases</div>
        </div>
      </Grid>
      <Grid item xs={6} md={3} className="box">
        <div className="box-text">
          <div className="box-text-main"> Recovered Cases</div>
          <div className="box-text-date">
            {new Date(data.lastUpdate).toDateString()}
          </div>
          <div className="box-text-value-b">
            <Countup
              start={0}
              end={data.recovered.value}
              duration="1"
              separator=","
            ></Countup>
          </div>
          <div>No of Recovered Cases</div>
        </div>
      </Grid>
      <Grid item xs={6} md={3} className="box">
        <div className="box-text">
          <div className="box-text-main"> Fatal Cases</div>
          <div className="box-text-date">
            {new Date(data.lastUpdate).toDateString()}
          </div>
          <div className="box-text-value-c">
            <Countup
              start={0}
              end={data.deaths.value}
              duration="1"
              separator=","
            ></Countup>
          </div>
          <div>No of Deaths</div>
        </div>
      </Grid>
    </Grid>
  ) : null;

  return (
    <div>
      {cards}
      <Chart data={data} country={country} className="chartBox" />
    </div>
  );
};

export default GlobalTracker;
