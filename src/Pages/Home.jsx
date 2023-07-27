import NavBar from "../Component/NavBar";
import Cover from "../Component/Cover";
import Category from "../Component/Category";
import Products from "../Component/Products";
import Footer from "../Component/Footer";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Cover />
      <Category />
      <Products />
      <Footer />
    </div>
  );
};
export default Home;
