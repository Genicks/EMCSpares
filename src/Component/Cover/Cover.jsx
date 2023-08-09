import "./CSS/Cover.css";

const Cover = () => {
  return (
    <div className="Cover container-fluid">
      <div>
        <div className="Container">

          <h1 className="d-flex justify-content-center">
            <div className="Info Heading">Spare parts for sale!</div>
          </h1>

          <h1 className="d-flex justify-content-center">
            <a href="https://api.whatsapp.com/send?phone=5926578699&text=I%20would%20like%20to%20make%20an%20order." className="orderWord">Order Now!</a>
          </h1>

        </div>

        <div className="d-flex justify-content-center">
          <h5 className="Info SubHeading">Service available within Guyana</h5>
        </div>
      </div>
    </div>
  );
};
export default Cover;
