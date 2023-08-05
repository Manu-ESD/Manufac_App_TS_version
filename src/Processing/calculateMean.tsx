// calculateMean function provide Mean for the provided data array

export default function calcualteMean(data:(number)[]) :number{
  console.log("called");
  let sum:number = 0;
  //calculate sumofallelements using forEach() method
  data.forEach((num) => {
    sum += (num);
  });
  console.log("calcualteMean", sum/data.length);

  return sum / data.length; //retuning mean which is sumofallelements/no.of.elements
}
