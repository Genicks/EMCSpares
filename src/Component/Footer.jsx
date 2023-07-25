import "../CSS/Footer.css";
import LogoFooter from "../Img/EMCLogo.png";

const Footer = () => {
  return (
    <div className="Footer">

      <div className="ConLogoFooter">
        <img src={LogoFooter} alt="EMC SPARES" className="LogoFooter"/>
        <a href="/" className="LogoLabel">
          EMC SPARES
        </a>
      </div>

      <div className="ConLinks ">
        <a
          className="Link "
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-whatsapp me-1"></i>
          Whatsapp
        </a>
      </div>

    </div>
  );
};
export default Footer;
