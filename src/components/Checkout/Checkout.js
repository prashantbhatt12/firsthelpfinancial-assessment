import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import AddCardForm from "./AddCardForm";
import classes from "./Checkout.module.css";
import CartContext from "../../store/cart-context";
import CheckoutItem from "./CheckoutItem";
const Checkout = () => {
  const [cardSwitchFlag, setCardSwitchFlag] = useState(false);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const cartCtx = useContext(CartContext);
  return (
    <div
      className="container rounded bg-white"
      style={{ "margin-top": "100px" }}
    >
      <div className="row d-flex justify-content-center pb-5">
        <div className="col-sm-5 col-md-5 ml-1 mt-8">
          <div className="py-4 d-flex flex-row">
            <h4>
              <i className="fa fa-check" style={{ color: "green" }}></i>{" "}
              <span>Delivery</span>
            </h4>
          </div>
          <div className="d-flex pt-2">
            <div>
              <p>
                <b>
                  <span className="green">Mobile Entry - Free</span>
                </b>
              </p>
            </div>
          </div>
          <p>Tickets Available by Mon Dec 19, 2022</p>
          <div className="rounded bg-light d-flex">
            <div className="p-2">
              These mobile tickets will be transferred directly to you from a
              trusted seller. We'll email you instructions on how to accept them
              on original ticket provider's mobile app.
            </div>
          </div>
          <hr />
          <div className="pt-2">
            <p>
              <b>
                <span className="green">Saved Cards</span>
              </b>
            </p>
            <form>
              <div className="d-flex flex-row align-content-center">
                <div className="pt-2 pr-2">
                  <input
                    type="radio"
                    name="radio1"
                    id="r1"
                    defaultChecked
                    onChange={() => setCardSwitchFlag((state) => !state)}
                  />
                </div>
                <div
                  className={`${
                    cardSwitchFlag === false ? "rounded border" : ""
                  } d-flex w-100 px-2`}
                >
                  <div className="pt-2">
                    <p>
                      <i className="fa fa-cc-visa text-primary pr-2"></i>{" "}
                      <span>Visa Debit Card</span>
                    </p>
                    <p>
                      <span>Edit | Delete</span>
                    </p>
                  </div>
                  <div className="ml-auto pt-2">************3456</div>
                </div>
              </div>
              <div className="d-flex flex-row w-100">
                <div className="pt-2 pr-2">
                  <input
                    type="radio"
                    name="radio1"
                    id="r2"
                    onChange={() => setCardSwitchFlag((state) => !state)}
                  />
                </div>
                <div
                  className={`${
                    cardSwitchFlag === true ? "rounded border" : ""
                  } d-flex w-100 px-2`}
                >
                  <div className="pt-2">
                    <p>
                      <i className="fa fa-cc-mastercard pr-2"></i>{" "}
                      <span>Mastercard Office</span>
                    </p>
                    <p>
                      <span>Edit | Delete</span>
                    </p>
                  </div>
                  <div className="ml-auto pt-2">************1038</div>
                </div>
              </div>

              <div className="d-flex">
                <div className="ml-auto">
                  <p className="text-primary">
                    <i className="fa fa-plus-circle text-primary"></i>{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowAddCardForm((state) => !state)}
                    >
                      Add payment
                    </span>
                  </p>
                </div>
              </div>
            </form>
            <hr />
            {showAddCardForm && <AddCardForm></AddCardForm>}
          </div>
        </div>
        <div className="col-sm-3 col-md-4 offset-md-1 mobile">
          <div className="py-4 d-flex justify-content-end">
            <h6>
              <Link to="/">Cancel and return to homepage</Link>
            </h6>
          </div>
          <div className="bg-light rounded d-flex flex-column">
            <div className="p-2 ml-3">
              <h4>Order Recap</h4>
            </div>
            {/* <div className="p-2 d-flex">
              <div className="col-8">Contracted Price</div>
              <div className="ml-auto">$186.76</div>
            </div>
            <div className="p-2 d-flex">
              <div className="col-8">Amount toward deductible</div>
              <div className="ml-auto">$0.00</div>
            </div>
            <div className="p-2 d-flex">
              <div className="col-8">Coinsurance( 0% )</div>
              <div className="ml-auto">+ $0.00</div>
            </div>
            <div className="p-2 d-flex">
              <div className="col-8">Copayment</div>
              <div className="ml-auto">+ $40.00</div>
            </div>
            <div className="border-top px-4 mx-3"></div>
            <div className="p-2 d-flex pt-3">
              <div className="col-8">
                Total Deductible, Coinsurance, and Copay
              </div>
              <div className="ml-auto">$40.00</div>
            </div>
            <div className="p-2 d-flex">
              <div className="col-8">
                Maximum out-of-pocket on Insurance Policy (not reached)
              </div>
              <div className="ml-auto">$6500.00</div>
            </div>
            <div className="border-top px-4 mx-3"></div>
            <div className="p-2 d-flex pt-3">
              <div className="col-8">Insurance Responsibility</div>
              <div className="ml-auto">
                <b>$71.76</b>
              </div>
            </div>
            <div className="p-2 d-flex">
              <div className="col-8">
                Patient Balance{" "}
                <span className="fa fa-question-circle text-secondary"></span>
              </div>
              <div className="ml-auto">
                <b>$71.76</b>
              </div>
            </div> */}
            {cartCtx.items.map((item) => (
              <CheckoutItem
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              ></CheckoutItem>
            ))}
            <div className="border-top px-4 mx-3"></div>
            <div className="p-2 d-flex pt-3">
              <div className="col-8">
                <b>Total</b>
              </div>
              <div className="ml-auto">
                <b className="green">${cartCtx.totalAmount.toFixed(2)}</b>
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-success btn-block w-100">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
