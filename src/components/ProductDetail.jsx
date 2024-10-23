const ProductDetail = () => {
  return (
    <>
      <div className="row m-3 vh-100">
        <div className="breadcrumbs-container mt-4"></div>
        <div className="col-sm-6 p-5 text-center">
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              maxWidth: "400px",
              height: "400px",
            }}
            // src={pictureMain != undefined ? imageUrl : ""}
            src="https://becutecosmetics.pk/wp-content/uploads/2024/02/Becute-Cosmetics-Super-Glitter-Lipstick-SG-804-Rs400.jpg"
            alt="imgproductdetail"
          />
        </div>
        <div className="col-sm-6 p-4">
          <h4 className="my-4 fw-bold">Name Product</h4>
          <p>
            Tình Trạng :
            <b>
              Còn Hàng <i className="bi bi-check-circle-fill text-success"></i>
            </b>
          </p>
          <p>
            Loại Sản Phẩm <b>ABC</b>
          </p>
          <p>
            Hãng Sản Xuất :<b>ABC</b>
          </p>
          <hr style={{ borderTop: "4px solid black" }} />
          <div className="input-group mb-3">
            <label className="d-flex align-items-center justify-content-center me-4">
              Số Lượng
            </label>
            <div className="d-flex align-items-center me-2">
              <button
                // onClick={handleDecrement}
                className="btn btn-outline-secondary px-3 me-3"
              >
                -
              </button>
              <input
                className="form-control text-center border-0"
                type="number"
                value={1}
                // onChange={(e) => handleOnChange(Number(e.target.value))}
                min="1"
                style={{ width: "60px" }}
              />
              <button
                // onClick={handleIncrement}
                className="btn btn-outline-secondary px-3"
              >
                +
              </button>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            Thêm Vào Giỏ Hàng
          </button>
          <p>
            Đang có <b>{1}</b> người cùng xem sản phẩm này
          </p>
        </div>
      </div>
      <div className="row m-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Mô Tả Sản Phẩm
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* <p>{description}</p> */}{" "}
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Đánh Giá Sản Phẩm
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
