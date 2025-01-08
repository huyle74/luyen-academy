import { Box, useMediaQuery } from "@mui/material";

import SliderShow from "./sliderShow";

export default function ClassGallery() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box sx={{ color: "white", fontFamily: "arial" }}>
      <Box
        sx={{
          width: `${matches ? "95%" : "50%"}`,
          m: "auto",
          pt: 10,
          fontWeight: 300,
        }}
        id="class-gallery-container"
      >
        <h1 style={{ marginBottom: "20px" }}>KHÓA CƠ BẢN</h1>
        <h2 style={{ lineHeight: "2.3rem" }}>
          Khóa học giúp học viên tự tin tạo ra các thiết kế độc đáo, hoàn thiện
          sản phẩm thời trang cao cấp từ bản vẽ đến thực tế.
        </h2>
        <SliderShow />
      </Box>
    </Box>
  );
}
