import NavBar from "../Component/NavBar";
import "../CSS/PageNotFound.css";
import Img from "../Img/no-results.png";

const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <div className="ConPNF">
        <img src={Img} alt="No Results" className="PNFImg" />
        <h1 className="text-secondary">Page not found</h1>
      </div>
    </>
  );
};
export default PageNotFound;
