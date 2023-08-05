import React from "react";
import "./AnalyticTable.css";

interface Displaydata {
  Heading : string,
  Result  : {
    alcohol: number;
    meanresult: string;
    medianresult: string;
    modereult: string;
  }[],
}

function AnalyticTable(props:Displaydata ) {
  return (
    <>
      <div className="AnalyticTableDiv">
        <h3>{props.Heading} Analytic Table</h3>
        {/* using map method to assign Result array values to the Table */}
        <table border={1}>
          <tbody>
            <tr>
              <th>Measure</th>
              {props.Result.map((item, index) => (
                <td key={index}>{"Class/Alcohol : " + item.alcohol}</td>
              ))}
            </tr>
            <tr>
              <th>Mean</th>
              {props.Result.map((item, index) => (
                <td key={index}>{item.meanresult}</td>
              ))}
            </tr>
            <tr>
              <th>Median</th>
              {props.Result.map((item, index) => (
                <td key={index}>{item.medianresult}</td>
              ))}
            </tr>
            <tr>
              <th>Mode</th>
              {props.Result.map((item, index) => (
                <td key={index}>{item.modereult}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AnalyticTable;
