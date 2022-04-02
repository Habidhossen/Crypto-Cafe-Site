import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Loader from "../Loader/Loader";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoader(false);
      });
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-xl font-semibold mb-10 mt-5 text-center">
            Total Coins: {coins.length}
          </h1>
          <div className="grid grid-cols-4 gap-y-14 gap-x-10 container mx-auto">
            {coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Coins;
