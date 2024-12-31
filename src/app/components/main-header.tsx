import { useState, useEffect } from "react";
import { Box, useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import gsap from "gsap";

import Menu from "./header-components/menu";

export default function MainHeader() {
  const matches = useMediaQuery("(max-width:758px)");
  const [dropDown, setDropDown] = useState<boolean>(false);

  useEffect(() => {
    let animation;
    if (dropDown) {
      animation = gsap.to(".menu", {
        width: "100vw",
        ease: "power1.inOut",
        duration: 0.5,
      });
    } else {
      animation = gsap.to(".menu", {
        width: 0,
        ease: "power1.inOut",
        duration: 0.5,
      });
    }

    return () => {
      animation.kill();
    };
  }, [dropDown]);

  const handleDropdown = () => {
    if (!dropDown) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  return (
    <Box
      className="main-header"
      sx={{
        position: `${matches ? "relative" : "fixed"}`,
        width: `${matches ? "fit-content" : "20vw"}`,
      }}
    >
      {matches ? (
        <Box>
          <IconButton
            id="menu-button"
            onClick={handleDropdown}
            sx={{
              p: 0,
              right: 10,
              top: 10,
              zIndex: 9999,
              position: "fixed",
              backgroundColor: "white",
              opacity: 0,
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            <MenuIcon
              sx={{
                m: 1,
              }}
            />
          </IconButton>
          <Menu />
        </Box>
      ) : (
        <Menu />
      )}
    </Box>
  );
}
