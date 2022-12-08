
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from "chart.js"
import { Line } from "react-chartjs-2"
import "./Linechart.css"
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler

)
const data={
  labels:["bitcoin", "ethereum", "solana", "binance", "litecoin", "avalanche", "chainlick", "wrapped bitcoin"],
  datasets: [
    {
      label: "crypto repartition",
      data:[16972.25, 1249.99, 14.012, 288.52, 77.88, 13.53, 7.066, 16922.17],
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132  0.3)",
    }
  ],
}

const LineChart = () => {

  
    
    
    return (
      <div>
        <Line data={data} />
      </div>
    );
    
  


          
          
  
  
}


export default LineChart