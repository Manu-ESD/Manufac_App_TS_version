import removeDuplicates from "./removeDuplicates";

interface f_obj{
  value:number;
  frequency:number;
}

export default function calculateMode(data:(number)[]):string {
  var n = data.length;

  //calculating duplicate free data for to find the frequency
  var nonDuplicateData:number[] = removeDuplicates(data);

  console.log("nonDuplicateData:", nonDuplicateData);

  //calculating frequency of the each element in nonDuplicateData
  var frequencyObj:f_obj[] = [];
  var counter:number = 0;
  for (var r = 0; r < nonDuplicateData.length; r++) {
    counter = 0;
    for (var s = 0; s < data.length; s++) {
      if (nonDuplicateData[r] === data[s]) {
        counter++;
      }
    }
    frequencyObj.push({
      value: nonDuplicateData[r],
      frequency: counter,
    });
  }

  //finding the max value in frequencies
  const maxfrequency:f_obj = frequencyObj.reduce((prev, current) => {
    return prev.frequency > current.frequency ? prev : current;
  });

  console.log("frequencyObj:", frequencyObj, maxfrequency.frequency);

  //finding values with maxfrequency  == mode's
  var result = [];
  for (let e = 0; e < frequencyObj.length; e++) {
    if (frequencyObj[e]["frequency"] === maxfrequency.frequency) {
      result.push(frequencyObj[e]["value"]);
    }
  }

  console.log("moderesult", result);

  return result.toString();
}
