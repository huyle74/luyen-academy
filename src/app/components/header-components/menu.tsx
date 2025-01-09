import { useState, useEffect } from "react";

import { Box, useMediaQuery, Button } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import MenuItem from "./menu-components/menu-item";
import Courses from "./menu-components/menu-course";
import gsap from "gsap";

export default function Menu() {
  const matches = useMediaQuery("(max-width:758px)");
  const [dropDown, setDropDown] = useState<boolean>(false);

  useEffect(() => {
    const divBody = document.querySelector(".body");

    if (divBody) {
      divBody.addEventListener("mousedown", () => {
        if (dropDown) {
          setDropDown(false);
        }
      });
    }
    return () => {
      if (divBody) {
        divBody.removeEventListener("mousedown", () => {
          if (dropDown) {
            setDropDown(false);
          }
        });
      }
    };
  }, [dropDown]);

  useEffect(() => {
    if (dropDown) {
      gsap.to("#course-list", {
        height: `${matches ? "100%" : "25vh"}`,
      });
    } else {
      gsap.to("#course-list", {
        height: 0,
      });
    }
  }, [dropDown]);

  const handleClick = () => {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  return (
    <Box
      id="menu"
      sx={{
        height: `${matches ? 0 : "100%"}`,
        display: "flex",
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
          width: `${matches ? "100%" : "50vw"}`,
          display: "flex",
          flexDirection: `${matches ? "column" : "row"}`,
          justifyContent: `${matches ? "" : "space-between"}`,
          alignItems: "center",
        }}
      >
        <Button
          href="/"
          sx={{
            p: 0,
            fontFamily: "Fjalla One",
            width: "min-content",
            whiteSpace: "nowrap",
            fontWeight: 600,
            fontSize: `${matches ? "1.3rem" : "1.5rem"}`,
            color: "black",
            "&:hover": {
              color: "#f01267",
            },
          }}
        >
          TRANG CHỦ
        </Button>
        <Button
          onClick={handleClick}
          sx={{
            p: 0,
            transform: `${matches ? "translate(10px, 5px)" : 0}`,
            fontFamily: "Fjalla One",
            width: "min-content",
            whiteSpace: "nowrap",
            fontWeight: 600,
            fontSize: `${matches ? "1.3rem" : "1.5rem"}`,
            color: "black",
            "&:hover": {
              color: "#f01267",
            },
          }}
          endIcon={dropDown ? <TipsAndUpdatesIcon /> : <LightbulbIcon />}
        >
          KHÓA HỌC
        </Button>
        <MenuItem id={"products"}>SẢN PHẨM</MenuItem>
        <MenuItem id={"about"}>VỀ CHÚNG TÔI</MenuItem>
        <MenuItem id={"contact"}>LIÊN HỆ</MenuItem>
      </Box>
      <Courses onClick={handleClick} />
    </Box>
  );
}
