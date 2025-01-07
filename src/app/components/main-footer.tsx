import { Box, useMediaQuery, Grid2 } from "@mui/material";

export default function MainFooter() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box
      sx={{
        height: `${matches ? "100vh" : "100vh"}`,
        color: "white",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: `${matches ? "50% 90%" : "50% 70%"}`,
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
          height: `${matches ? "60%" : "50%"}`,
          alignContent: "center",
        }}
      >
        <h2
          style={{
            width: `${matches ? "95%" : "50%"}`,
            margin: `${matches ? "0.8rem" : "auto"}`,
            border: "white 1px solid",
            padding: `${matches ? "0.8rem" : "30px"}`,
            fontSize: `${matches ? "0.9rem" : ""}`,
          }}
        >
          THAM GIA LUYẾN ACADEMY ĐỂ TRỞ BIẾN Ý TƯỞNG CỦA BẠN THÀNH 1 CHIẾC VÁY
          ƯỚC MƠ
        </h2>
      </Box>
      <Box
        sx={{
          height: `${matches ? "100%" : "50%"}`,
          backgroundColor: "#2d2f31",
          clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
          display: "flex",
          p: 0,
          m: 0,
        }}
      >
        <Box
          sx={{
            width: `${matches ? "80%" : "50%"}`,
            m: `${matches ? "50px 0 0 40px" : "auto"}`,
            display: "flex",
            flexDirection: `${matches ? "column" : "row"}`,
            justifyContent: `${matches ? "center" : "space-between"}`,
          }}
        >
          <Grid2 container spacing={3}>
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
                  width: `${matches ? "max-content" : "min-content"}`,
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
                href="tel:0931969091"
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
              <a href="https://www.tiktok.com/@luyn.vy.ci?_t=ZS-8spiZfCLHbW&_r=1" target="blank">
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
