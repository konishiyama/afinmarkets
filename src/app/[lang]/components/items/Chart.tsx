import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const Chart = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow lg:shadow-lg shadow-boxShadow">
      <Line
        options={options}
        data={{
          labels: [
            "2023-01",
            "2023-02",
            "2023-03",
            "2023-04",
            "2023-05",
            "2023-06",
            "2023-07",
          ],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],
              backgroundColor: "purple",
            },
            {
              data: [145, 12, 23, 134, 44, 88, 55],
              backgroundColor: "blue",
            },
            {
              data: [150, 10, 45, 54, 68, 32, 100],
              backgroundColor: "red",
            },
          ],
        }}
      />
    </div>
  );
};
export default Chart;
