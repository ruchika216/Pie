import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ data, payloadValue }) {
  const t = payloadValue.costData.totalCost.amount.currencyCode;
  const totalSymb = t === "USD" ? "$ " : "₹ ";
  const total = payloadValue.costData.totalCost.amount.amount.toString();
  const totalval = totalSymb + " " + total;

  const options = {
    plugins: {
      title: {
        display: true,
        color: "blue",
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
          color: true,
        },
      },
    },
  };
  return (
    <div style={{ margin: "auto", width: "70%", marginTop: "-159px" }}>
      <div style={{ width: "500px", height: "500px", position: "relative" }}>
        <Doughnut data={data} options={options} width={500} height={500} />
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "65%",
            left: 0,
            textAlign: "center",
            marginTop: "-28px",
            lineHeight: "20px",
          }}
        >
          <span>{totalval}</span>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
