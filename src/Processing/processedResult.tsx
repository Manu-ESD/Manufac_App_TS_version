import removeDuplicates from "./removeDuplicates";
import calcualteMean from "./calculateMean";
import calcualteMedian from "./calculateMedian";
import calculateMode from "./calculateMode";

interface R_data {
  alcohol: number;
  meanresult: string;
  medianresult: string;
  modereult: string;
}



export default function processedResult(data:any, type:string):R_data[] {
  const dataLen:number = data.length;
  let Totalvalues:number[][] = [];

  //alchol class values array
  let alcoholArray = [];
  for (let i = 0; i < dataLen; i++) {
    alcoholArray.push(data[i]["Alcohol"]);
  }
  alcoholArray = removeDuplicates(alcoholArray);

  // getting the give "type" parameter [in this case "Flavanoids"]  value for each value in alcoholArray
  for (var a = 0; a < alcoholArray.length; a++) {
    var valuePerAlcohol:number[] = [];
    for (let i = 0; i < dataLen; i++) {
      if (data[i]["Alcohol"] === alcoholArray[a]) {
        valuePerAlcohol.push(parseFloat(data[i][type]));
      } 
    }
    Totalvalues.push(valuePerAlcohol);
  }
  // obtainde Totalvalues which containes array of type parameter value for each value in alcohol array

  //calculating result array for each Alcohol value's data in the Totalvalues array
  var result:R_data[] = [];
  for (var a = 0; a < Totalvalues.length; a++) {
    console.log("insidefun", calcualteMean(Totalvalues[a]));
    result.push({
      alcohol: alcoholArray[a],
      meanresult: calcualteMean(Totalvalues[a]).toFixed(3),
      medianresult: calcualteMedian(Totalvalues[a]).toFixed(3),
      modereult: calculateMode(Totalvalues[a]),
    });
  }

  console.log("Result", result);
  return result;
}
