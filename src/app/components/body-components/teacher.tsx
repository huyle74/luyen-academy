import { Box, Grid2, useMediaQuery, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Teacher() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#212121",
          height: `${matches ? "100%" : "100vh"}`,
          display: "flex",
          flexDirection: "column",
        }}
        className="teacher"
        id="teacher"
      >
        <h1
          style={{
            fontSize: `${matches ? "2rem" : "3rem"}`,
            marginTop: `${matches ? "2rem" : "auto"}`,
          }}
        >
          GẶP GỠ GIẢNG VIÊN
        </h1>
        <Grid2 container sx={{ mt: "auto" }}>
          <Grid2
            size={{ md: 5, xs: 12 }}
            sx={{
              position: "relative",
              height: `${matches ? "35vh" : "100%"}`,
              // border: "1px white solid",
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/042/057/892/small_2x/ai-generated-female-teacher-with-eyeglasses-isolated-on-transparent-background-png.png"
              alt="TEACHER"
            />
            <Box
              sx={{
                backgroundColor: "#fbe3d9",
                width: `${matches ? "30%" : "40%"}`,
                height: "80%",
                position: "absolute",
                bottom: "0",
                left: `${matches ? "50%" : "40%"}`,
                transform: " translateX(-50%)",
              }}
            ></Box>
          </Grid2>
          <Grid2
            size={{ md: 7, xs: 12 }}
            sx={{
              pl: `${matches ? 0 : 5}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                height: "3rem",
                // border: "1px white solid",
                width: `${matches ? "100%" : "70%"}`,
                mt: `${matches ? "1rem" : 0}`,
                fontSize: `${matches ? "1rem" : "2rem"}`,
              }}
            >
              <h2>Ms. Luyen Dang</h2>
              <Box
                sx={{
                  color: "#3896f0",
                  pl: "1rem",
                }}
              >
                <VerifiedIcon sx={{ height: "3rem", fontSize: "3rem" }} />
              </Box>
            </Box>
            <Box sx={{ mt: "2rem", width: `${matches ? "95%" : "70%"}` }}>
              <h3>
                <p>&#8226;</p>
                <p>Nhà sáng lập và thiết kế tại "Luyen Academy". ​</p>
              </h3>
              <h3>
                <p>&#8226;</p>
                <p>
                  Chuyên gia hàng đầu trong việc thiết kế và may đo các sản phẩm
                  thời trang cao cấp, từ những chiếc váy cưới sang trọng, trang
                  phục dạ hội lộng lẫy đến tà áo dài truyền thống đầy tinh tế.
                </p>
              </h3>
              <h3>
                <p>&#8226;</p>
                <p>
                  Với hơn 20 năm kinh nghiệm trong lĩnh vực thiết kế và sản xuất
                  váy cưới, dạ hội và áo dài, cô Luyến đã ghi dấu ấn không chỉ
                  trong nước mà còn trên thị trường quốc tế.
                </p>
              </h3>
              <h3>
                <p>&#8226;</p>
                <p>
                  Đào tạo hàng trăm học viên trở thành những thợ may, nhà thiết
                  kế giỏi trong lĩnh vực này.
                </p>
              </h3>
            </Box>
            <Box
              sx={{
                pl: 7,
                height: "20vh",
                alignContent: "center",
                fontFamily: "arial",
              }}
            >
              <Button
                href="tel:0931969091"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: 4,
                  fontSize: "1rem",
                  color: "white",
                  width: "fit-content",
                }}
              >
                <PhoneAndroidIcon sx={{ fontSize: "2rem" }} />
                <p>+84 93 196 9091</p>
              </Button>
              <Button
                target="blank"
                href="https://www.facebook.com/people/Luy%E1%BA%BFn-Academy/61560552058905/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: 4,
                  fontSize: "1rem",
                  mt: 1,
                  color: "white",
                  width: "fit-content",
                }}
              >
                <FacebookIcon sx={{ fontSize: "2rem" }} />
                <p>Luyen Dang</p>
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
