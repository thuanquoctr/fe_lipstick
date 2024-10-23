import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setChose(3);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [chose, setChose] = React.useState(1);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div style={{ width: "120px" }}>
          <img
            onClick={() => navigate("/")}
            style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
            src="https://img.freepik.com/free-photo/top-view-lipstick-with-brush_23-2149096695.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Button
                onClick={() => setChose(1)}
                sx={{
                  ...(chose === 1 && { background: "#90e0ef" }),
                  fontSize: "17px",
                  color: "#F26CA7",
                  fontWeight: "600",
                  fontFamily: "'Gill Sans', sans-serif;",
                }}
                variant="text"
              >
                Sản Phẩm
              </Button>
            </li>
            <li class="nav-item">
              <Button
                onClick={() => setChose(2)}
                sx={{
                  ...(chose === 2 && { background: "#90e0ef" }),
                  fontSize: "17px",
                  color: "#F26CA7",
                  fontWeight: "600",
                  fontFamily: "'Gill Sans', sans-serif;",
                }}
                variant="text"
              >
                Bán Chạy
              </Button>
            </li>
            <li class="nav-item dropdown">
              <Button
                sx={{
                  ...(chose === 3 && { background: "#90e0ef" }),
                  fontSize: "17px",
                  color: "#F26CA7",
                  fontWeight: "600",
                  fontFamily: "'Gill Sans', sans-serif;",
                }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Thương Hiệu
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </li>
            <li class="nav-item">
              <Button
                onClick={() => setChose(4)}
                sx={{
                  ...(chose === 4 && { background: "#90e0ef" }),
                  fontSize: "17px",
                  color: "#F26CA7",
                  fontWeight: "600",
                  fontFamily: "'Gill Sans', sans-serif;",
                }}
                variant="text"
              >
                Liên Hệ
              </Button>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Tìm kiếm..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ color: "black", borderColor: "black" }}
            >
              Tìm
            </button>
          </form>
          <Button
            sx={{
              fontSize: "17px",
              color: "#F26CA7",
              fontWeight: "600",
              fontFamily: "'Gill Sans', sans-serif;",
            }}
            variant="text"
          >
            Đăng Nhập
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
