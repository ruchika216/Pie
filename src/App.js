import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import data1 from "./data1.json";
import DoughnutChart from "./components/Doughnut";

function App() {
  const tempbcg = [
    "rgba(232,99,132,0.5)",
    "rgba(232,211,6,0.5)",
    "rgba(54,162,235,0.5)",
    "rgba(255,159,64,0.5)",
    "rgba(153,102,255,0.5)",
  ];

  const t2 = [
    "rgba(232,99,132,1)",
    "rgba(232,211,6,1)",
    "rgba(54,162,235,1)",
    "rgba(255,159,64,1)",
    "rgba(153,102,255,1)",
  ];

  const [bcg, Setbcg] = useState([
    "rgba(232,99,132,1)",
    "rgba(232,211,6,1)",
    "rgba(54,162,235,1)",
    "rgba(255,159,64,1)",
    "rgba(153,102,255,1)",
  ]);

  const [act, setAct] = useState(-1);
  let [payloadValue, setpayloadValue] = useState(data1.payload);
  useEffect(() => {
    fetchData();
  }, [payloadValue]);

  const [dataf, setdataf] = useState([]);

  const data = {
    labels: [],
    datasets: [
      {
        label: "Service Report",
        data: dataf,

        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: bcg,
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        radius: "50%",
      },
    ],
  };

  const fetchData = async () => {
    let dataUsd = [];
    payloadValue.costData.serviceCosts.map((v) =>
      dataUsd.push(parseFloat(v.amount.amount))
    );

    setdataf(dataUsd);
  };

  return (
    <div className="App">
      <div className="container">
        <Home
          data={data}
          act={act}
          setAct={setAct}
          Setbcg={Setbcg}
          tempbcg={tempbcg}
          t2={t2}
          payloadValue={payloadValue}
          setpayloadValue={setpayloadValue}
        />
        <DoughnutChart data={data} payloadValue={payloadValue} />
      </div>
    </div>
  );
}

export default App;
