const CheckoutItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div className="p-2 d-flex">
      <div className="col-8">{props.name}</div>
      <div className="ml-auto">
        {price} <b>x{props.quantity}</b>
      </div>
    </div>
  );
};

export default CheckoutItem;
