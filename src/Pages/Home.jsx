import NavBar from "../Component/NavBar/NavBar";
import Cover from "../Component/Cover/Cover";
import Category from "../Component/Category1/Category";
import Products from "../Component/Products/Products";
import Footer from "../Component/Footer/Footer";
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
