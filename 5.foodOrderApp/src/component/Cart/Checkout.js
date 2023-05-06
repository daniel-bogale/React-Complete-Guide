const Checkout = (props) => {
  return (
    <form action="">
      <div>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label htmlFor="">Street</label>
        <input type="text" id="street" />
        <div>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
      </div>

      <button>Confirm</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};
export default Checkout;
