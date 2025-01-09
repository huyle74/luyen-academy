import { useState, useEffect } from "react";
import { Box, useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import gsap from "gsap";

import Menu from "./header-components/menu";

export default function MainHeader() {
  const matches = useMediaQuery("(max-width:758px)");
  const [dropDown, setDropDown] = useState<boolean>(false);

  useEffect(() => {
    if (matches) {
      if (dropDown) {
        gsap.to("#menu", {
          ease: "power1.inOut",
          duration: 0.5,
          height: "100vh",
        });
      } else {
        gsap.to("#menu", {
          ease: "power1.inOut",
          duration: 0.5,
          height: 0,
        });
      }
    }
  }, [dropDown]);

  const handleDropdown = () => {
    if (!dropDown) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  return (
    <Box id="main-header">
      {matches ? (
        <Box>
          <IconButton
            id="menu-button"
            onClick={handleDropdown}
            sx={{
              p: 0,
              right: 10,
              top: 10,
              zIndex: 999,
              position: "fixed",
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            {dropDown ? (
              <CloseIcon
                sx={{
                  m: 1,
                }}
              />
            ) : (
              <MenuIcon
                sx={{
                  m: 1,
                }}
              />
            )}
          </IconButton>
          <Menu />
        </Box>
      ) : (
        <Menu />
      )}
    </Box>
  );
}
