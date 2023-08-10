import React, { useState } from "react";
import circle from "../../assets/circle.svg";
import check from "../../assets/check.svg";
import { paymentCards } from "../../constants/cards.constants";

function PaymentMethod() {
  const [cards, setDefaultCard] = useState(paymentCards);

  return cards.map((card, i) => {
    return (
      <div
        key={i}
        onClick={() => {
          setDefaultCard(
            cards.map((c) => {
              return c.name === card.name
                ? { ...c, default: true }
                : { ...c, default: false };
            })
          );
        }}
        className={`items-start flex w-full rounded-lg bg-white border mb-4 p-4 justify-between cursor-pointer
          ${card.default ? "bg-purple-50 border-purple-500" : ""}
          `}
      >
        <div className="flex place-items-start">
          <img src={card.icon} alt="" />
          <div className="pl-4">
            <p
              className={`${
                card.default ? "text-purple-800" : "text-gray-700"
              } text-md font-medium`}
            >
              {card.name} ending in 1234
            </p>
            <p
              className={`text-[14px] font-light ${
                card.default ? "text-purple-500" : "text-gray-500"
              } `}
            >
              Expiry 06/2024
            </p>
            <div className="mt-2">
              <span
                className={`${
                  card.default ? "text-purple-500" : "text-gray-700"
                } `}
              >
                Set as default
              </span>
              <span className="ml-4 text-purple-700">Edit</span>
            </div>
          </div>
        </div>
        <img src={card.default ? check : circle} alt="" />
      </div>
    );
  });
}

export default PaymentMethod;
