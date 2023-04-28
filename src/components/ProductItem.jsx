import "./ProductItem.css"

function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU"
          alt=""
        />
      </div>
      <div className="product-info">
        <h2>Soda</h2>
        <span>12TL</span>
      </div>
    </div>
  );
}

export default ProductItem;
