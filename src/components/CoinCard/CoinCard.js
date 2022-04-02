import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const { name, image, current_price } = coin;

  return (
    <Link to={`/coin-detail/${coin.id}`}>
      <div className="flex bg-white shadow-md p-5 rounded-lg">
        <img className="w-16 " src={image} alt="" />
        <div className="ml-5 my-auto">
          <h1 className="text-lg font-bold">{name}</h1>
          <h1>$ {current_price}</h1>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
