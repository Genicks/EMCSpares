import "../CSS/Footer.css";
import logo from "../Img/EMCLogo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <a href="/" className="LogoLabel">
        <img src={logo} alt="EMC SPARES" className="logo LogoFooter" />
        EMC SPARES
      </a>
      <div className="Links">
        
      </div>
    </div>
  );
};
export default Footer;
