import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid p-0">
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
          <Link to="/" className="me-auto">
            <img
              style={{ width: "70px" }}
              src="https://m.media-amazon.com/images/I/61E+ahhGuJL.jpg"
              alt=""
            />
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">
                Sản Phẩm
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Chọn Theo Thương Hiệu
              </Link>
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
              <Link className="nav-link active" aria-current="page" to="">
                Giới Thiệu
              </Link>
            </li>
            <li className="nav-item d-none d-md-block d-sm-block d-xs-none">
              <a className="nav-link active" aria-current="page" href="#">
                |
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">
                Liên Hệ
              </Link>
            </li>
            <li className="nav-item dropdown account-style">
              <Link
                className="nav-link dropdown-toggle text-center"
                to=""
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
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <div className="dropdown-item d-flex justify-content-between bg-white">
                    <div
                      onClick={() => navigate("/authen/login")}
                      className="item-account account-login"
                    >
                      Đăng nhập
                    </div>
                    <div
                      onClick={() => navigate("/authen/register")}
                      className="item-account account-register"
                    >
                      Đăng ký
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="mx-3" />
                </li>
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Đăng Ký
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item d-none d-md-block d-sm-block d-xs-none">
              <a className="nav-link active" aria-current="page" href="#">
                |
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">
                Hỗ Trợ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
