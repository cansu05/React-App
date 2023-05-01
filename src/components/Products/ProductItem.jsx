import "./ProductItem.css";

const ProductItem = ({product}) => {
  const { imageUrl, productName, productPrice } = product;

  const clickHandler = () => {
    console.log("sepete eklendi")
  }
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">
        <h2>{productName}</h2>
        <span>{productPrice}TL</span>
        <br/>
        <button onClick={clickHandler}>Sepete Ekle</button>
      </div>
    </div>
  );
}

export default ProductItem;
