import "./CSS/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";

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

function App() {
  return (
    <Router basename="EMCSpares">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div id="backToTopBtn" onClick={scrollToTop}>
        <button className="btn btn-success">
          Back to top <i className="bi bi-arrow-up-short"></i>
        </button>
      </div>
    </Router>
  );
}

export default App;
