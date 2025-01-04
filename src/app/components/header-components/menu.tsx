import { Box, useMediaQuery } from "@mui/material";

import MenuItem from "./menu-components/menu-item";

export default function Menu() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box
      id="menu"
      sx={{
        height: `${matches ? 0 : "100%"}`,
        display: `${matches ? "flex" : "flex"}`,
        alignItems: "center",
        flexDirection: `${matches ? "column" : "row"}`,
        position: `${matches ? "fixed" : "relative"}`,
        padding: `${matches ? 0 : "2rem 0 2rem 0"}`,
        justifyContent: "center",
        backgroundColor: "#f9f4f1",
        overflow: `${matches ? "hidden" : "none"}`,
        zIndex: 888,
        width: "100%",
      }}
    >
      <a href="#" className="logo-link">
        <img
          className="menu-logo"
          src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/logo.jpg"
          alt="logo"
        />
      </a>
      <Box
        sx={{
          width: "40vw",
          display: "flex",
          flexDirection: `${matches ? "column" : "row"}`,
          justifyContent: "space-between",
        }}
      >
        <MenuItem id={"entry-body"}>KHÓA HỌC</MenuItem>
        <MenuItem id={"teacher"}>SẢN PHẨM</MenuItem>
        <MenuItem id={"about"}>VỀ CHÚNG TÔI</MenuItem>
        <MenuItem id={"contact"}>LIÊN HỆ</MenuItem>
      </Box>
    </Box>
  );
}
