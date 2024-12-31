import { useRef, useEffect } from "react";

import { Box } from "@mui/material";
import gsap from "gsap";

import Middle_banner from "./banner-mid";
import TopBot_banner from "./banner-top-bottom";
import { flex_config } from "@/app/utilities/style-components";

const Banner = ({}) => {
  const midRef = useRef<HTMLDivElement | null>(null),
    topRef = useRef<HTMLDivElement | null>(null),
    botRef = useRef<HTMLDivElement | null>(null),
    bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline(),
      tlMid = gsap.timeline(),
      tlSide = gsap.timeline();

    tlMid
      .from(".mid-banner p", {
        y: "100%",
        duration: 0.5,
      })
      .to(midRef.current, {
        left: "-100%",
        duration: 5,
      });
    tlSide
      .from(".side-banner p", {
        y: "-100%",
        duration: 0.5,
      })
      .to([topRef.current, botRef.current], {
        right: "-100%",
        duration: 5,
      });

    const delay = setTimeout(() => {
      tl.to(bannerRef.current, {
        opacity: 0,
        duration: 0.5,
      }).to(bannerRef.current, {
        display: "none",
      });
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Box
      ref={bannerRef}
      sx={{
        ...flex_config,
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        alignContent: "space-between",
      }}
    >
      <TopBot_banner ref={topRef} />
      <Middle_banner ref={midRef} />
      <TopBot_banner ref={botRef} />
    </Box>
  );
};
export default Banner;
