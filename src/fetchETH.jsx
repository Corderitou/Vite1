import React, { useEffect, useState } from 'react';

setInterval
function DataDisplayer1(props) {
  const [data1, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT");
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  },);

  if (data1) {
    const precio = parseFloat(data1.price)
    return( <div>ETH: {precio}</div>  )
} else {
  return null;
}
}


export default DataDisplayer1