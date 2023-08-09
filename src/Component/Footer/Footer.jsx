import "./CSS/Footer.css";
import LogoFooter from "../../Img/EMCLogo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="ConLogoFooter">
        <img src={LogoFooter} alt="EMC SPARES" className="LogoFooter" />
        <a href="/" className="LogoLabel">
          EMC SPARES
        </a>
      </div>

      <div className="ConLinks">
        <a
          className="Link Link1"
          href="https://call.whatsapp.com/voice/FagIjZ9kgmBFmNkJnWcEZE"
        >
          <i className="bi bi-telephone me-2 Link1"></i>Phone
        </a>

        <a
          className="Link Link2"
          href="mailto:genicks.html@gmail.com?subject=EMCSpares%20Customer&body=I%20would%20like%20to%20have%20some%20assistance."
        >
          <i className="bi bi-envelope me-2 Link2"></i>
          Email
        </a>

        <a
          className="Link Link3"
          href="https://api.whatsapp.com/send?phone=5926578699&text=I%20would%20like%20to%20make%20an%20query"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp me-2 Link3"></i>
          Whatsapp
        </a>

        <a
          className="Link Link4"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-facebook me-2 Link4"></i>
          Facebook
        </a>
      </div>
    </div>
  );
};
export default Footer;
