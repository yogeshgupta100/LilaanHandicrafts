import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories , heading}) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="sec-heading">{heading}</div>
            <div className="categories"> 
                {categories?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={item?.attributes?.img?.data?.attributes?.url}
                        />
                            <div className="title"><p>{item?.attributes?.title}</p></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
