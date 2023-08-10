import visa from "../assets/Payment method icon.svg";
import mastercard from "../assets/Mastercard.svg";
export const paymentCards = [
  {
    name: "Mastercard",
    icon: mastercard,
    default: true,
  },
  {
    name: "Visa",
    icon: visa,
    default: false,
  },
];
