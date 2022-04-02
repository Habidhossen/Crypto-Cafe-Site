import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const [coin, setCoin] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);

  return (
    <div>
      <h1>Coin Name: {coin.name}</h1>
    </div>
  );
};

export default CoinDetail;
