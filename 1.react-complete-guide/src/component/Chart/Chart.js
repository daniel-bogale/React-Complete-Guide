import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValueArray = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximumValue = Math.max(...dataPointValueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
