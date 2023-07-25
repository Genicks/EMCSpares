import Product from "./Product"
import Img from "../Img/EMCLogo_bg.png"
import "../CSS/Products.css"


const Products = () => {

  return (
    <div className="ConConForProducts">
      <div className="ConForProducts">
        <Product Name="Light Accessories" Img={Img} Id="Product_1"/>
        <Product Name="Shocks" Img={Img} Id="Product_2"/>
        <Product Name="Springs" Img={Img} Id="Product_3"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
        <Product Name="Placeholder" Img={Img} Id="Placeholder"/>
      </div>
    </div>
    );
};
export default Products;