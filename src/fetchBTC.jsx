import React, { useEffect, useState } from 'react';

function DataDisplayer(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
      const newData = await response.json();
      setData(newData);
    };
  
    fetchData();
  },);

  if (data) {
    const precioBtc = parseFloat(data.price)
    return( 
                <div>
                    BTCUSDT: {precioBtc}          
                </div>
           )
  } else {
    return null;
  }
}
export default DataDisplayer