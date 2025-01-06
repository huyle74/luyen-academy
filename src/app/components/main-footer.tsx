import { useRef, useEffect, useState } from "react";
import { Box, useMediaQuery, Grid2 } from "@mui/material";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function MainFooter() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box
      sx={{
        height: `${matches ? "100%" : "100vh"}`,
        color: "white",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "50% 70%",
        backgroundImage:
          'url("https://storage.cloud.google.com/luyen-wedding-academy-bucket/class-image.jpg")',
        fontFamily: "arial",
      }}
      id="contact"
    >
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      ></Box>
      <Box
        sx={{
          zIndex: 99,
          position: "relative",
          textAlign: "center",
          height: "50%",
          alignContent: "center",
        }}
      >
        <h2
          style={{
            width: "50%",
            margin: "auto",
            border: "white 1px solid",
            padding: "30px",
          }}
        >
          THAM GIA LUYẾN ACADEMY ĐỂ TRỞ BIẾN Ý TƯỞNG CỦA BẠN THÀNH 1 CHIẾC VÁY
          ƯỚC MƠ
        </h2>
      </Box>
      <Box
        sx={{
          height: "50%",
          backgroundColor: "#2d2f31",
          clipPath: "polygon(0 16%, 100% 0%, 100% 100%, 0% 100%)",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: `${matches ? "100%" : "50%"}`,
            m: "auto",
            // border: "1px white solid",
            display: "flex",
            flexDirection: `${matches ? "column" : "row"}`,
            justifyContent: "space-between",
          }}
        >
          <Grid2 container>
            <Grid2
              size={{ md: 4, xs: 12 }}
              sx={{
                color: "white",
                flexDirection: "column",
              }}
            >
              <img
                src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/logo.jpg"
                alt="logo"
                style={{ objectFit: "cover", width: "35%", height: "auto" }}
              />
              <h3
                style={{
                  backgroundColor: "#f01267",
                  width: "min-content",
                  marginTop: "10px",
                }}
              >
                LUYẾN ACADEMY
              </h3>
              <p
                style={{
                  fontWeight: 100,
                  fontSize: "0.9rem",
                  marginTop: "15px",
                  width: "50%",
                }}
              >
                410 Đ. Nguyễn Văn Tạo, Long Thới, Nhà Bè, Hồ Chí Minh
              </p>
              <a
                href="#"
                style={{
                  fontWeight: 1000,
                  fontSize: "0.8rem",
                  marginTop: "20px",
                }}
              >
                (+84) 93 196 90 91
              </a>
            </Grid2>
            <Grid2 id="footer-sitemap" size={{ md: 4, xs: 12 }}>
              <h2>MENU</h2>
              <a href="#">Khóa học</a>
              <a href="#">Sản phẩm</a>
              <a href="#">Gia công váy đầm</a>
              <a href="#">Liên Hệ</a>
            </Grid2>
            <Grid2 className="social-network-icon" size={{ md: 4, xs: 12 }}>
              <a href="#" target="blank">
                <img
                  style={{
                    width: "80px",
                  }}
                  src="https://avatars.githubusercontent.com/u/61349443?s=280&v=4"
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/people/Luy%E1%BA%BFn-Academy/61560552058905/"
                target="blank"
              >
                <img
                  style={{
                    width: "50px",
                  }}
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"
                  alt="facebook"
                />
                <img
                  style={{
                    width: "50px",
                  }}
                  src="https://famfonts.com/wp-content/uploads/facebook-2-wide.png"
                  alt=""
                />
              </a>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}
