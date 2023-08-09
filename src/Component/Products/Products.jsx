import Product from "./Component/Product"
import "./CSS/Products.css"
// import Img from "./Products-Img/EMCLogo_bg.png"
import Img1 from "./Products-Img/Lights.jpg"
import Img2 from "./Products-Img/Shocks.jpg"
import Img3 from "./Products-Img/springs.jpg"
import Img4 from "./Products-Img/Battery.png"
import Img5 from "./Products-Img/SparkPlug.jpeg"
import Img6 from "./Products-Img/Bearings.jpg"
import Img7 from "./Products-Img/Oilfilter.jpg"
import Img8 from "./Products-Img/AirFilter.png"
import Img9 from "./Products-Img/WiperBlade.png"
import Img10 from "./Products-Img/Alternator.jpg"
import Img11 from "./Products-Img/IgnitionCoil.jpg"
import Img12 from "./Products-Img/BreaksPad.jpg"


const Products = () => {

  return (
    <div className="ConConForProducts">
      <div className="ConForProducts">
        <Product Name="Springs" Img={Img3} Id="Product_3"/>
        <Product Name="Shocks" Img={Img2} Id="Product_2"/>
        <Product Name="Light Accessories" Img={Img1} Id="Product_1"/>
        <Product Name="Battery" Img={Img4} Id="Placeholder"/>
        <Product Name="Spark Plug" Img={Img5} Id="Placeholder"/>
        <Product Name="Bearings" Img={Img6} Id="Placeholder"/>
        <Product Name="Oil Filter" Img={Img7} Id="Placeholder"/>
        <Product Name="Air Filter" Img={Img8} Id="Placeholder"/>
        <Product Name="Wiper Blades" Img={Img9} Id="Placeholder"/>
        <Product Name="Alternator" Img={Img10} Id="Placeholder"/>
        <Product Name="Ignition Coil" Img={Img11} Id="Placeholder"/>
        <Product Name="Brake Pads" Img={Img12} Id="Placeholder"/>
      </div>
    </div>
    );
};
export default Products;