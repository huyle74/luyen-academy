import { useState, useEffect } from "react";
import { Box, useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import Menu from "./header-components/menu";

export default function MainHeader() {
  const matches = useMediaQuery("(max-width:758px)");
  const [dropDown, setDropDown] = useState<boolean>(false),
    [scrollToId, setScrollToId] = useState<string>("");

  useEffect(() => {
    let tl: any;

    if (matches) {
      if (dropDown) {
        tl = gsap.to("#menu", {
          ease: "power1.inOut",
          duration: 0.5,
          height: "100vh",
        });
      } else {
        tl = gsap.to("#menu", {
          ease: "power1.inOut",
          duration: 0.5,
          height: 0,
        });
      }
    }

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, [dropDown]);

  useEffect(() => {
    let animation: any;

    if (scrollToId.length !== 0) {
      animation = gsap.to("html, body", {
        duration: 2,
        scrollTo: `#${scrollToId}`,
        ease: "power1",
      });
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [scrollToId]);

  const handleDropdown = () => {
    if (!dropDown) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const id = event?.currentTarget.dataset.id;
    setScrollToId(`${id}`);

    if (matches) {
      gsap.to("#menu", {
        height: 0,
        duration: 0.6,
        ease: "power1",
      });
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
          <Menu onClick={handleClick} />
        </Box>
      ) : (
        <Menu onClick={handleClick} />
      )}
    </Box>
  );
}
