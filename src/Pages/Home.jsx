import NavBar from "../Component/NavBar";
import Cover from "../Component/Cover";
import Category from "../Component/Category";
import Products from "../Component/Products";
import Footer from "../Component/Footer";
import "../CSS/Home.css";

function checkScrollPosition() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 600) {
    backToTopBtn.style.display = "block";
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.visibility = "visible";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.visibility = "hidden";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("scroll", checkScrollPosition);

const Home = () => {
  return (
    <div>
      <NavBar />
      <Cover />
      <Category />
      <div id="backToTopBtn" onClick={scrollToTop}>
        <button className="btn btn-success">
          Back to top <i className="bi bi-arrow-up-short"></i>
        </button>
      </div>

      <Products />
      <Footer />
    </div>
  );
};
export default Home;
