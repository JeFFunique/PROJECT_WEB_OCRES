
import './App.css';
import { useEffect, useState } from 'react';
import Axios from "axios"
import { Line } from 'react-chartjs-2';
import Coin from './components/Coin';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js"
ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement);
function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState([]);
  const [data, setData] = useState({
    labels: ["bitcoin", "ethereum", "solana", "binance", "litecoin", "avalanche", "chainlick", "wrapped bitcoin"],
    datasets: [{
      label: "Crypto Repartition example",
      data: [16972.25, 1249.99, 14.012, 288.52, 77.88, 13.53, 7.066, 16922.17],
      backgroundColor: "rgb(255, 99, 132)",
    }]
  })

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        setListOfCoins(response.data.coins);
      })

  }, [])
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord);
  })


  return (
    <div className="App">
      <div className='cryptoHeader'>
        <input type="text" placeholder='Bitcoin...'
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className='cryptoDisplay'>{filteredCoins.map((coin) => {
        return (<Coin name={coin.name}
          price={coin.price}
          icon={coin.icon}
          symbol={coin.symbol}
        />
        );
      })}
      </div>
  <div className='linech' style={{ width: "100%" }} />
      <Line data={data} />
      </div>
      </div>
    </div>

  )
}

export default App;
