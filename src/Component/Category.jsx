import "../CSS/Category.css";

const Category = () => {
  return (
    <div className=" mt-4 mb-4">
      <div className="d-flex justify-content-center">
        <h4 className="Category">CURRENTLY AVAILABLE CATEGORIES</h4>
      </div>
      <div className="d-flex justify-content-center">
        <a
          href="https://api.whatsapp.com/send?phone=5926578699&text=I%20would%20like%20to%20make%20a%20special%20order%20outside%20of%20the%20provided%20categories."
          target="_blank"
          rel="noreferrer"
          className="special"
        >
          Looking for somthing else? Make a special order!
        </a>
      </div>
    </div>
  );
};
export default Category;
