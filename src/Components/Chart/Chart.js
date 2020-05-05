import React, { useState, useEffect } from "react";

import "./Chart.css";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#C0504D",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#4C5C73",
            backgroundColor: "rgba(76,92,115,0.5)",
            fill: true,
          },
        ],
      }}
    ></Line>
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#C0504D", "#9BBB59", "#4C5C73"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `${country}` },
      }}
    ></Bar>
  ) : null;
  return (
    <div className={country?"chartCount":"chartGlob"}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;
