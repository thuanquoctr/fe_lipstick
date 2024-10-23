const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4 className="mt-5">
                    Giới thiệu sản phẩm tuyệt vời về: Son (Lipstick)
                  </h4>
                  <p>
                    Nâng cao vẻ đẹp của bạn với các sản phẩm son (lipstick) hàng
                    đầu của chúng tôi. Từ màu sắc tươi sáng đến chất liệu bền
                    lâu, chúng tôi có mọi thứ bạn cần để tỏa sáng. Trải nghiệm
                    chất lượng và hiệu suất chưa từng có.
                  </p>
                  <a style={{ textDecoration: "none" }} href="#">
                    Mua Ngay
                  </a>{" "}
                </div>

                <div className="col-md-5 col-12 order-md-2 order-1">
                  <video src=""></video>
                  <img
                    className="mx-auto"
                    style={{ width: "50%" }}
                    src="https://cdn-icons-png.flaticon.com/512/1254/1254665.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
