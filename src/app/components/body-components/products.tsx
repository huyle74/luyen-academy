import { useEffect, useRef, useState } from "react";

import { Box, Grid2 } from "@mui/material";
import gsap from "gsap";

import { gallery } from "@/app/utilities/imageLinks";
import { fetchImages } from "@/app/utilities/googleStorage";

export default function Products() {
  const [images, setImages] = useState<any>([]),
    picContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchImages();
      setImages(res.link);
      console.log(res.env);
    };
    if (images.length === 0) {
      fetch();
    }

    const observe = new IntersectionObserver(
      (entries, observe) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(".product-pics", {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: { each: 0.3 },
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px", root: null }
    );

    if (picContainerRef.current) {
      observe.observe(picContainerRef.current);
    }

    return () => {
      if (picContainerRef.current) {
        observe.unobserve(picContainerRef.current);
      }
      observe.disconnect();
    };
  }, []);

  return (
    <Box className="products" id="products">
      <h1>CÁC SẢN PHẨM TỪ HỌC VIỆN</h1>
      <Box sx={{ m: "auto" }} ref={picContainerRef} id="product-gallery">
        <Grid2 container spacing={2}>
          {gallery.map((img: string, index: number) => {
            return (
              <Grid2 key={index} size={{ md: 3, xs: 6 }}>
                <img src={img} alt="product Image" className="product-pics" />
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
}
