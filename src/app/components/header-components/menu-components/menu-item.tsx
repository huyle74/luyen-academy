import { useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";
import gsap from "gsap";

import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

type childProps = {
  id: string;
  children: React.ReactNode;
};

export default function MenuItem({ children, id }: childProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(max-width:758px)");

  const handleClick = () => {
    gsap.to("html", {
      duration: 2,
      scrollTo: `#${id}`,
      ease: "power1",
    });
    if (matches) {
      gsap.to("#menu", {
        height: 0,
        duration: 0.6,
        ease: "power1",
      });
    }
  };

  return (
    <a
      onClick={handleClick}
      className="menu-item"
      href="#"
      style={{
        fontSize: `${matches ? "1.3rem" : "1.5rem"}`,
      }}
    >
      <p id="menu-item-text" ref={itemRef}>
        {children}
      </p>
    </a>
  );
}
