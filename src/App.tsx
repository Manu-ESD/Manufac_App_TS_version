import "./App.css";
import AnalyticTable from "./component/AnalyticTable/AnalyticTable";
import Winedata from "./Data/Wine-Data.json";
import processedResult from "./Processing/processedResult";

interface WineData {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number;
  "Nonflavanoid phenols": string;
  Proanthocyanins: string;
  "Color intensity": number;
  Hue: number;
  "OD280/OD315 of diluted wines": string;
  Unknown: number;
}

interface G_data {
  Alcohol: number;
  Gamma:string;
  }

interface R_data {
  alcohol: number;
  meanresult: string;
  medianresult: string;
  modereult: string;
}

function App(): JSX.Element {
  let FlavanoidsResult : R_data[] = processedResult(Winedata as WineData[], "Flavanoids"); //FlavanoidsResult is generated using processedResult function passed with args
  let GammaData : G_data[] = GammaDataCalculation(Winedata  as WineData[]); //generating gamma data
  let GammaResult : R_data[]= processedResult(GammaData as G_data[], "Gamma"); //GammaResult is generated using processedResult function passed with args

  return (
    <>
      <div className="App">
        <h1>Manufac Analytic App</h1>
        <AnalyticTable Heading="Flavanoids" Result={FlavanoidsResult} />
        <AnalyticTable Heading="Gamma" Result={GammaResult} />
      </div>
    </>
  );
}

export default App;

//Gamma DATA is created from the Winedata using mathematice formule provided
function GammaDataCalculation(datavalues:WineData[]):G_data[] {
  var gammadata:G_data[]= [];
  for (var w = 0; w < datavalues.length; w++) {
    gammadata.push({
      Alcohol: datavalues[w]["Alcohol"],
      Gamma: (
        (datavalues[w]["Ash"] * datavalues[w]["Hue"]) /
        datavalues[w]["Magnesium"]
      ).toFixed(1),
    });
  }
  return gammadata;
}
