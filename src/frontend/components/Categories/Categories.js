import "./Categories.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/products-context";
import { filterActionTypes } from "../../utils/constants";

const CategoryCard = ({ catImg, category }) => {
  const navigate = useNavigate();
  const { productState, productDispatch } = useProducts();

  const { CATEGORY, CLEAR_FILTERS } = filterActionTypes;

  useEffect(() => {
    productDispatch({
      type: CLEAR_FILTERS,
      payload: {
        categories: productState.allCategories,
        products: productState.products,
      },
    });
  }, []);

  return (
    <div className="category-card-container">
      <div className="category-card">
        <img
          src={catImg}
          alt={category}
          onClick={() => {
            productDispatch({ type: CATEGORY, payload: category });
            window.scroll({ top: 0, behavior: "smooth" });
            navigate("/products");
          }}
        />
      </div>
      {/* <p>{category}</p> */}
    </div>
  );
};

const Categories = () => {
  const { productState } = useProducts();

  return (
    <>
      <div className="category-outer-container">
        <h1>Top categories</h1>
        <div className="section-text-headings">
        </div>
        <div className="category-cards">
          {productState?.allCategories?.map(({ _id, img, categoryName }) => (
            <CategoryCard key={_id} catImg={img} category={categoryName} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Categories;