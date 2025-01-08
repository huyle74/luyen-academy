import { useState, useRef, useEffect } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { class_gallery } from "@/app/utilities/imageLinks";

gsap.registerPlugin(ScrollToPlugin);

export default function SliderShow() {
  const matches = useMediaQuery("(max-width:758px)");
  const [imgIndex, setImageIndex] = useState<number>(0);
  const [preImage, setPreImage] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animation;
    animation = gsap.to(imageRef.current, {
      scrollTo: `#image-big-${imgIndex}`,
      duration: 1,
      ease: "power1",
    });
    animation = gsap.to(`#image-${imgIndex}`, {
      borderRight: "white 4px solid",
      duration: 0.2,
    });
    animation = gsap.to(`#image-${preImage}`, {
      borderRight: "#212121 4px solid",
      duration: 0.2,
    });

    return () => {
      animation.kill();
    };
  }, [imgIndex]);

  const handleClickImage = (i: number) => {
    setPreImage(imgIndex);
    setImageIndex(i);
  };

  const handleClickForward = () => {
    if (imgIndex < class_gallery.length - 1) {
      setPreImage(imgIndex);
      setImageIndex((prev) => prev + 1);
    }
  };
  const handleClickBackward = () => {
    if (imgIndex > 0) {
      setPreImage(imgIndex);
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <Box
      sx={{
        mt: 7,
        height: "90vh",
        width: "100%",
        position: "relative",
        mb: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          overflowY: "scroll",
          flexDirection: "column",
        }}
        id="thumbnail-container"
      >
        {class_gallery.map((img, i) => {
          return (
            <a
              key={i}
              className="thumbnail-image"
              onClick={() => handleClickImage(i)}
            >
              <img src={img} alt="image" id={`image-${i}`} />
            </a>
          );
        })}
      </Box>
      <Box className="slideshow-image" ref={imageRef}>
        {class_gallery.map((img, i) => {
          return (
            <Box className="image-container" key={i} id={`image-big-${i}`}>
              <img src={img} alt="img" />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          right: 0,
          top: "50%",
          width: "85%",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          sx={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            ml: 3,
          }}
          onClick={handleClickBackward}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            mr: 3,
          }}
          onClick={handleClickForward}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
