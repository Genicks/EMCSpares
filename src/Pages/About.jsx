import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";
import "../CSS/About.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="About">
        <div className="BackSplash"></div>
        <h1>EMC SPARES</h1>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            aliquid consectetur temporibus, corrupti veritatis recusandae quas
            illum ea soluta voluptas quia! Nisi iusto velit voluptatum error
            magni suscipit cum commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corporis perferendis quae recusandae, minus fugit
            consectetur. Neque, distinctio dolore esse non fuga officiis ipsam
            aut laudantium ut in, itaque hic eligendi.
          </p>
          <code>        
            Built and Maintain by: id="NQF Web-Developement"
          </code>
        </div>
        <br />
        <div className="content">
          <h4>How to make an order</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            aliquid consectetur temporibus, corrupti veritatis recusandae quas
            illum ea soluta voluptas quia! Nisi iusto velit voluptatum error
            magni suscipit cum commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corporis perferendis quae recusandae, minus fugit
            consectetur. Neque, distinctio dolore esse non fuga officiis ipsam
            aut laudantium ut in, itaque hic eligendi.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
