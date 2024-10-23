const Footer = () => {
  return (
    <footer class="footer">
      <section class="bg-light py-4 py-md-5 py-xl-8 border-top border-light">
        <div class="container overflow-hidden">
          <div class="row gy-4 gy-lg-0 justify-content-xl-between">
            <div class="col-12 col-md-4 col-lg-3 col-xl-2">
              <div class="widget">
                <img
                  src="https://cdn-icons-png.freepik.com/512/8167/8167676.png"
                  alt="Bìa"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    filter: "brightness(1.1) contrast(1.1) saturate(1.2)",
                  }}
                />
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-xl-2">
              <div class="widget">
                <h4 class="widget-title mb-4">Liên hệ với chúng tôi</h4>
                <address class="mb-4">Hồ Chí Minh</address>
                <p class="mb-1">
                  <a
                    class="link-secondary text-decoration-none"
                    href="tel:+15057922430"
                  >
                    (+84) 123-456
                  </a>
                </p>
                <p class="mb-0">
                  <a
                    class="link-secondary text-decoration-none"
                    href="mailto:demo@yourdomain.com"
                  >
                    abc@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-xl-2">
              <div class="widget">
                <h4 class="widget-title mb-4">Tìm hiểu thêm</h4>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="#!" class="link-secondary text-decoration-none">
                      Về chúng tôi
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#!" class="link-secondary text-decoration-none">
                      Liên hệ
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#!" class="link-secondary text-decoration-none">
                      Quảng cáo
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#!" class="link-secondary text-decoration-none">
                      Điều khoản dịch vụ
                    </a>
                  </li>
                  <li class="mb-0">
                    <a href="#!" class="link-secondary text-decoration-none">
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-lg-3 col-xl-4">
              <div class="widget">
                <h4 class="widget-title mb-4">Bản tin của chúng tôi</h4>
                <p class="mb-4">
                  Đăng ký nhận bản tin của chúng tôi để nhận tin tức và giảm
                  giá.
                </p>
                <form action="#!">
                  <div class="row gy-4">
                    <div class="col-12">
                      <div class="input-group">
                        <span
                          class="input-group-text"
                          id="email-newsletter-addon"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-envelope"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </span>
                        <input
                          type="email"
                          class="form-control"
                          id="email-newsletter"
                          value=""
                          placeholder="Địa chỉ email"
                          aria-label="email-newsletter"
                          aria-describedby="email-newsletter-addon"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button
                          style={{ background: "pink" }}
                          class="btn"
                          type="submit"
                        >
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
        <div class="container overflow-hidden">
          <div class="row gy-4 gy-md-0 align-items-md-center">
            <div class="col-xs-12 col-md-7 order-1 order-md-0">
              <div class="copyright text-center text-md-start">
                &copy; 2024. Tất cả các quyền được bảo lưu.
              </div>
              <div class="credits text-secondary text-center text-md-start mt-2 fs-8">
                <a
                  href="https://bootstrapbrain.com/"
                  class="link-secondary text-decoration-none"
                ></a>{" "}
              </div>
            </div>

            <div class="col-xs-12 col-md-5 order-0 order-md-1">
              <div class="social-media-wrapper">
                <ul class="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
                  <li class="me-3">
                    <a href="#!" class="link-dark link-opacity-75-hover">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                  </li>
                  <li class="me-3">
                    <a href="#!" class="link-dark link-opacity-75-hover">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.168.264-5.334.327-6.077.33h-.089c-.82-.002-4.99-.03-6.113-.332a2.007 2.007 0 0 1-1.415-1.419c-.1-.377-.175-.87-.224-1.372l-.007-.073c-.029-.284-.045-.563-.057-.743-.002-.063-.002-.129-.002-.174v-.074c.001-.193.01-1.107.082-2.059l.008-.106c.054-.563.138-1.14.237-1.558a2.007 2.007 0 0 1 1.415-1.418C3.177 2.05 7.258 1.999 8.051 1.999zM8 2.994C7.211 2.994 3.573 3.039 3.167 3.066a1 1 0 0 0-.704.646c-.068.262-.136.653-.184 1.051a11.034 11.034 0 0 0-.037.442c-.048.575-.055 1.184-.055 1.459v.07c0 .274.007.884.055 1.458.007.079.016.166.037.261.052.399.156.788.346 1.027.191.239.454.391.769.391h.01c.739 0 4.319-.004 5.123-.004.083 0 .231-.008.34-.016.495-.047 1.285-.074 2.177-.074 1.963 0 3.906.179 4.236.197a.998.998 0 0 0 .706-.646c.069-.262.135-.653.184-1.051a11.022 11.022 0 0 0 .037-.443c.048-.575.055-1.184.055-1.459v-.07c0-.276-.007-.884-.055-1.459-.007-.079-.016-.166-.037-.261a1.006 1.006 0 0 0-.706-.646C12.36 3.037 9.39 2.994 8 2.994zM6.472 8l2.528-1.482L6.472 5.036v2.964z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="link-dark link-opacity-75-hover">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5 9.341-9.334 0-.141 0-.283-.005-.425A6.678 6.678 0 0 0 16 3.548a6.55 6.55 0 0 1-1.889.517A3.287 3.287 0 0 0 15.549 2a6.604 6.604 0 0 1-2.084.795A3.287 3.287 0 0 0 7.875 7.547a9.326 9.326 0 0 1-6.77-3.42A3.287 3.287 0 0 0 3.24 9.5a3.274 3.274 0 0 1-1.486-.413v.042a3.287 3.287 0 0 0 2.634 3.226A3.312 3.312 0 0 1 2.5 13.18a3.287 3.287 0 0 0 3.063 2.273A6.614 6.614 0 0 1 0 14.137a9.314 9.314 0 0 0 5.026 1.476" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
