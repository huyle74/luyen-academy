import { Box, useMediaQuery } from "@mui/material";

import TiktokVideo from "./video";

export default function EntryBody() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          "url('https://storage.googleapis.com/luyen-wedding-academy-bucket/luyen-academy-pics/product-collection/464316107_122135743598351735_5721276897516419846_n.jpg')",
      }}
      className="entry-body"
      id="entry-body"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></Box>
      <Box
        sx={{
          p: `${matches ? 0 : 2}`,
          width: "60%",
          alignContent: "center",
          zIndex: 99,
        }}
        className="entry-body-title"
      >
        <h1
          style={{
            width: "fit-content",
            margin: "auto",
            fontSize: `${matches ? "2rem" : "4rem"}`,
          }}
        >
          Luyến Academy
        </h1>
        <p style={{ fontSize: `${matches ? "1rem" : "1.5rem"}` }}>
          <span style={{ backgroundColor: "pink" }}>
            Khám phá sự sáng tạo vô hạn và biến đam mê thành nghề nghiệp. Hãy để
            thiết kế thời trang là con đường bạn tỏa sáng
          </span>
        </p>
      </Box>
      <TiktokVideo />
    </Box>
  );
}
