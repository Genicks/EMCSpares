import "../CSS/Product.css";

const Product = (props) => {
  const { Name, Img, Id } = props;

const NameNoSpace = Name.replace(/%20/g, "")

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=5926578699&text=I%20would%20like%20to%20order%20something%20from%20the%20category:%20${NameNoSpace}`}
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
