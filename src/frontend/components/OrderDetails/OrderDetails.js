import "./OrderDetails.css";
import { useNavigate } from "react-router-dom";

import { useAddress } from "../../contexts/address-context";
import { useCart } from "../../contexts/cart-context";

import { filterActionTypes } from "../../utils/constants";


const OrderDetails = () => {
  const navigate = useNavigate();
 
  const {
    cartState: { cart },
    deliveryCharges,
    totalPriceWithoutDiscount,
    totalDiscount,
    totalCheckoutAmount,
   
  } = useCart();
  const {
    addressState: { addresses, selectedAddressId },
  } = useAddress();

  const { SET_ORDER_LIST } = filterActionTypes;

  const currentAddress = addresses.find(({ _id }) => _id === selectedAddressId);

 

  return (
    <div className="order-details-container">
      <div className="title">Order Summary</div>
      <div className="order-items-wrapper">
        {cart?.map((cartItem) => (
          <div key={cartItem._id} className="item">
            <div>
              {cartItem.title} ($ {cartItem.updatedPrice} X {cartItem.qty})
            </div>
            <div>$ {cartItem.updatedPrice * cartItem.qty}</div>
          </div>
        ))}
      </div>
      <div className="title">Price-details</div>
      <div className="order-items-wrapper">
        <div className="item">
          <div>Total Price</div>
          <div>$ {totalPriceWithoutDiscount}</div>
        </div>
        <div className="item">
          <div>Total Discount</div>
          <div>$ {totalDiscount}</div>
        </div>
        <div className="item">
          <div>Delivery Charges</div>
          <div>$ {deliveryCharges}</div>
        </div>
        <div className="item grand-total">
          <div>Grand Total</div>
          <div>$ {totalCheckoutAmount}</div>
        </div>
      </div>
      <div className="title">Deliver To</div>
      <div className="order-items-wrapper address-wrap">
        {currentAddress ? (
          <>
            <div className="address-name">{currentAddress.name}</div>
            <div>
              {currentAddress.street}, {currentAddress.city} -{" "}
              {currentAddress.zipcode}
            </div>
            <div>
              {currentAddress.state}, {currentAddress.country}
            </div>
            <div>{currentAddress.mobile}</div>
          </>
        ) : (
          <p>Add an Address to Proceed.</p>
        )}
      </div>
      <button
        className="place-order-btn"
        onClick={() => placeOrderBtnHandler()}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderDetails;