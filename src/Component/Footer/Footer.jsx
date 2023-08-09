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
          className="nav-link dropdown-toggle Link Link1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          href="/"
        >
          <i className="bi bi-telephone me-2 Link1"></i>Phone
        </a>

        <ul className="dropdown-menu dropdown">
          <li>
            <a
              className="dropdown-item whatsappNav"
              href="https://call.whatsapp.com/voice/FagIjZ9kgmBFmNkJnWcEZE"
            >
              <i className="bi bi-whatsapp me-2 whatsappNav"></i>
              Whatsapp
            </a>
          </li>
          <hr className="dropdown-divider p-0 m-0" />
          <li>
            <a className="dropdown-item PhonNav" href="tel:6578699">
              <i className="bi bi-telephone me-2 PhonNav"></i>
              Phone
            </a>
          </li>
        </ul>

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
