function Cart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}

export default Cart;