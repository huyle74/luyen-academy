import { useState, useEffect, useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import EastIcon from "@mui/icons-material/East";

import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

type childProps = {
  id: string;
  children: React.ReactNode;
};

export default function MenuItem({ children, id }: childProps) {
  const [hover, setHover] = useState<boolean>(false),
    itemRef = useRef<HTMLDivElement>(null),
    arrowRef = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(max-width:758px)");

  useEffect(() => {
    let animation, arrow;
    const tl = gsap.timeline();

    if (hover) {
      animation = gsap.to(itemRef.current, {
        rotate: 1,
        yoyo: true,
        repeat: -1,
        duration: 0.16,
      });
      arrow = tl
        .to(arrowRef.current, {
          x: "100%",
          duration: 0.5,
        })
        .from(arrowRef.current, {
          x: "-100%",
          duration: 0.5,
        })
        .to(arrowRef.current, {
          rotate: 4,
          yoyo: true,
          repeat: -1,
          duration: 0.16,
        });
    } else {
      animation = gsap.to(itemRef.current, {
        rotate: 0,
        yoyo: false,
        duration: 0,
      });
      arrow = tl
        .to(arrowRef.current, {
          x: 0,
          duration: 0,
        })
        .to(arrowRef.current, {
          rotate: 0,
          yoyo: false,
          duration: 0,
        });
    }
    return () => {
      animation.kill();
      arrow.kill();
    };
  }, [hover]);

  const handleHover = () => {
    if (!hover) {
      setHover(true);
    }
  };

  const handleNotHover = () => {
    if (hover) {
      setHover(false);
    }
  };

  const handleClick = () => {
    gsap.to("#body-container", {
      duration: 2,
      scrollTo: `#${id}`,
      ease: "power1",
    });
    if (matches) {
      gsap.to(".menu", {
        width: 0,
        duration: 0.6,
        ease: "power1",
      });
    }
  };

  return (
    <a
      onClick={handleClick}
      className="menu-item"
      onMouseEnter={handleHover}
      onMouseLeave={handleNotHover}
      href="#"
      style={{ fontSize: `${matches ? "1.3rem" : "2rem"}` }}
    >
      <p ref={itemRef}>{children}</p>
      <Box ref={arrowRef}>
        <EastIcon sx={{ fontSize: "2rem", color: "white" }} />
      </Box>
    </a>
  );
}
