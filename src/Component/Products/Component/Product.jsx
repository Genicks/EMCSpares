import "../CSS/Product.css";

const Product = (props) => {
  const { Name, Img, Id } = props;

const NameNoSpace = Name.replace(/%20/g, "")

  return (
    <a
      href={`https:api.whatsapp.com/send?phone=5926578699&text=Category:%20${NameNoSpace}%0A%0APlease%20Enter%20The%20Following%20Information:%0AMake:%0AModel:%20`}
      target="blank"
      rel="noreferrer"
      className={`ConForProduct ${Id}`}
    >
      <div className="CenterItem">
        <img src={Img} alt={Name} className="ProductImg" />
      </div>
      <div className="CenterItem">
        <p className="ProductName">{Name}</p>
      </div>
    </a>
  );
};
export default Product;
