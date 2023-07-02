import React from "react";
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
const getBasketTotal = (basket) =>  basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              {/* Subtotal (0 items): <strong>0</strong> */}
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={0}
        value={getBasketTotal(basket)}
        Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
   {/* <button >Proceed to Checkout</button> */}
      <button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
