import { Box, Grid2 } from "@mui/material";

export default function AboutPage() {
  return (
    <Box className="about-us" id="about">
      <Grid2 container sx={{ height: "100%" }}>
        <Grid2 size={{ md: 3, xs: 12 }}>
          <Box
            sx={{
              backgroundColor: "#f01267",
              alignContent: "center",
              height: "100%",
            }}
          >
            <h2>About</h2>
            <h1>LUYẾN ACADEMY</h1>
          </Box>
        </Grid2>
        <Grid2
          size={{ md: 6, xs: 12 }}
          sx={{
            position: "relative",
            backgroundImage:
              "url('https://storage.googleapis.com/luyen-wedding-academy-bucket/about-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: `center`,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          ></Box>
          <p>
            Luyến Academy tự hào là học viện hàng đầu với hơn 20 năm kinh nghiệm
            trong lĩnh vực đào tạo may mặc, chuyên sâu về thiết kế và may đo các
            trang phục cao cấp như đầm cưới, váy dạ hội và áo dài ba sui. Với bề
            dày kinh nghiệm, học viện đã đào tạo hàng ngàn học viên, giúp họ nắm
            vững kỹ thuật may mặc tinh xảo, từ cơ bản đến nâng cao, và phát
            triển tư duy sáng tạo trong thiết kế. Đội ngũ giảng viên giàu chuyên
            môn cùng phương pháp giảng dạy thực tiễn của Luyến Academy là chìa
            khóa giúp học viên tự tin bước vào ngành thời trang và khẳng định
            dấu ấn riêng của mình.
          </p>
        </Grid2>
        <Grid2
          size={{ md: 3, xs: 12 }}
          sx={{ backgroundColor: "#2d2f31" }}
        ></Grid2>
      </Grid2>
    </Box>
  );
}
