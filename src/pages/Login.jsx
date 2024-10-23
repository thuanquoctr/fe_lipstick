const Login = () => {
  return (
    <>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="col-md-3 col-sm-3 col-xs-12 px-5">
          <h5 className="title-login text-center mb-3">Người dùng đăng nhập</h5>
          <div class="mt-3 mb-3">
            <input type="email" class="form-control py-2" placeholder="Email" />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control py-2"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <div className="">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="ms-1" htmlFor="toggle_password">
                Hiển thị mật khẩu
              </label>
            </div>
            <div className="forgetpassword">
              <label className="ms-1" htmlFor="toggle_password">
                Quên mật khẩu ?
              </label>
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <input
              className="btn btn-lg w-100 btn-login text-white"
              type="button"
              value="Đăng nhập"
            />
          </div>
          <p className="text-center orstyle">Hoặc</p>
          <div className="mb-3 d-flex justify-content-center">
            <button
              className="btn btn-lg w-100 btn-login-facebook text-secondary"
              type="button"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google Logo"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
              Đăng nhập với Google
            </button>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <button
              className="btn btn-lg w-100 btn-login-facebook text-secondary"
              type="button"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                alt="Facebook Logo"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Đăng nhập với Facebook
            </button>
          </div>
          <p className="text-center">
            Chưa có tài khoản?{" "}
            <span style={{ color: "#0069DB", cursor: "pointer" }}>Đăng ký</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
