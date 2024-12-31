import { useEffect, useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";
import gsap from "gsap";

import Banner from "./header-components/entry-animation/banner";
import MainHeader from "./main-header";
import MainBody from "./main-body";

export default function Main() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const matches = useMediaQuery("(max-width:758px)");
  console.log(matches);

  useEffect(() => {
    let tl = gsap.timeline();

    const effect = setTimeout(() => {
      if (matches) {
        tl.to(mainRef.current, {
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        })
          .to(mainRef.current, {
            delay: 0.5,
            y: 0,
            opacity: 1,
          })
          .to("#menu-button", {
            opacity: 1,
          });
      } else {
        tl.to(mainRef.current, {
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        })
          .to(".menu", {
            width: "100%",
            ease: "back",
            duration: 0.5,
          })
          .to(mainRef.current, {
            delay: 0.5,
            y: 0,
            opacity: 1,
          });
      }
    }, 2300);

    return () => {
      clearTimeout(effect);
    };
  }, [matches]);

  return (
    <Box sx={{ position: "relative", display: "flex" }}>
      <Banner />
      <MainHeader />
      <Box
        className="main"
        ref={mainRef}
        sx={{ width: `${matches ? "100vw" : "80vw"}` }}
      >
        <MainBody />
      </Box>
    </Box>
  );
}
