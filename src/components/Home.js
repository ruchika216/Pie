import React from "react";
import USD from "../data1.json";
import INR from "../data2.json";

function Home({
  data,
  act,
  setAct,
  Setbcg,
  tempbcg,
  t2,
  payloadValue,
  setpayloadValue,
}) {
  const usdPayload = USD.payload;
  const inrPayload = INR.payload;

  const chng = (i) => {
    let t = tempbcg;
    t[i] = t2[i];
    Setbcg(t);
    setAct(i);
  };

  return (
    <>
      <div className="heading">
        <h1 style={{ backgroundColor: "gray" }}>
          {payloadValue.chartMetaData.chartTitle}
        </h1>
        <h4>{payloadValue.chartMetaData.chartDescription}</h4>
      </div>
      <div className="bt">
        <button
          className="button-3"
          role="button"
          onClick={() => setpayloadValue((payloadValue = inrPayload))}
          style={{ padding: "5" }}
        >
          INR
        </button>
        <button
          className="button-3"
          role="button"
          onClick={() => setpayloadValue((payloadValue = usdPayload))}
        >
          USD
        </button>
      </div>
      <div style={{ position: "relative", left: "73px", bottom: "-20px" }}>
        <div>
          <table>
            {payloadValue.costData.serviceCosts.map((data1, ind) => {
              return (
                <div className="box" key={data1.id}>
                  <tbody>
                    <tr
                      className={act === ind || act === -1 ? "" : "disabled"}
                      onClick={() => {
                        chng(ind);
                      }}
                    >
                      <td
                        style={{
                          backgroundColor:
                            data.datasets[0].backgroundColor[ind],
                          width: 50,
                        }}
                      ></td>
                      <td>{data1.fullName}</td>
                      <td style={{ position: "absolute", right: "150px" }}>
                        {data1.amount.currencyCode === "USD" ? "$ " : "₹ "}
                        {data1.amount.amount}
                      </td>
                    </tr>
                  </tbody>
                </div>
              );
            })}
          </table>
          <table>
            <tr>
              {/* <td>{payloadValue.costData.taxValue[0].fullName}</td> */}
              <td>Tax</td>
              <td style={{ position: "absolute", right: "150px" }}>
                {payloadValue.costData.taxValue[0].amount.currencyCode === "USD"
                  ? "$ "
                  : "₹ "}
                {payloadValue.costData.taxValue[0].amount.amount}
              </td>
            </tr>
            <tr style={{ fontWeight: "bold" }}>
              <td>Total</td>
              <td style={{ position: "absolute", right: "150px" }}>
                {payloadValue.costData.taxValue[0].amount.currencyCode === "USD"
                  ? "$ "
                  : "₹ "}
                {payloadValue.costData.totalCost.amount.amount}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
