import { Box, useMediaQuery } from "@mui/material";

import MenuItem from "./menu-components/menu-item";
import Dash_line from "./menu-components/dashed-line";
import MenuBottom from "./menu-components/bottom";

export default function Menu() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box
      className="menu"
      sx={{
        backgroundColor: "#191919",
        height: `${matches ? "100%" : "100vh"}`,
        border: "1px black solid",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        width: 0,
        zIndex: 999,
        position: `${matches ? "fixed" : "relative"}`,
      }}
    >
      <Box sx={{ height: "100%", width: "90%", mt: 4 }}>
        <a href="#" className="logo-link">
          <img
            className="menu-logo"
            src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/logo.jpg"
            alt="logo"
            style={{ width: `${matches ? "40%" : "60%"}` }}
          />
        </a>
        <MenuItem id={"entry-body"}>KHÓA HỌC</MenuItem>
        <Dash_line />
        <MenuItem id={"teacher"}>SẢN PHẨM</MenuItem>
        <Dash_line />
        <MenuItem id={"about"}>VỀ CHÚNG TÔI</MenuItem>
        <Dash_line />
        <MenuItem id={'contact'}>LIÊN HỆ</MenuItem>
      </Box>
      <MenuBottom />
    </Box>
  );
}
