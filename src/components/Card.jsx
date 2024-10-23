import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const [value, setValue] = useState(2);
  const navigate = useNavigate();
  return (
    <div
      className="single_advisor_profile wow fadeInUp"
      data-wow-delay="0.2s"
      style={{
        visibility: "visible",
        animationDelay: "0.2s",
        animationName: "fadeInUp",
      }}
    >
      {/* Team Thumb */}
      <div className="advisor_thumb">
        <img
          style={{ width: "100%" }}
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlwc3RpY2t8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        {/* Social Info */}
        <div className="social-info">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      {/* Team Details */}
      <div className="single_advisor_details_info">
        <h6>
          <i
            onClick={() => navigate("/productDetail")}
            class="bi bi-bag-plus fs-4"
          ></i>
          <i class="bi bi-eye fs-4 mx-2"></i>
          <i class="bi bi-suit-heart fs-4"></i>
        </h6>
      </div>
    </div>
  );
};
export default Card;
