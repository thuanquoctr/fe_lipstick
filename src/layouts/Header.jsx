const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="me-auto">
            <img
              style={{ width: "70px" }}
              src="https://m.media-amazon.com/images/I/61E+ahhGuJL.jpg"
              alt=""
            />
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Sản Phẩm
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Chọn Theo Thương Hiệu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Data1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Data2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Giới Thiệu
              </a>
            </li>
            <li className="nav-item d-none d-md-block d-sm-block d-xs-none">
              <a className="nav-link active" aria-current="page" href="#">
                |
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Liên Hệ
              </a>
            </li>
            <li className="nav-item dropdown account-style">
              <a
                className="nav-link dropdown-toggle mt-1 text-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{ width: "30px", height: "28px" }}
                  src="https://static-00.iconduck.com/assets.00/profile-default-icon-1024x1023-4u5mrj2v.png"
                  alt=""
                />{" "}
                <span>Tài Khoản</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Đăng Nhập
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Đăng Ký
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item d-none d-md-block d-sm-block d-xs-none">
              <a className="nav-link active" aria-current="page" href="#">
                |
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Hỗ Trợ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
