import { useRef, useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import gsap from "gsap";

type ChildProps = {
  icon: React.ReactNode;
  contact: string;
};

const Contact: React.FC<ChildProps> = ({ icon, contact }) => {
  const infoRef = useRef<HTMLDivElement | null>(null),
    iconRef = useRef<HTMLDivElement | null>(null),
    [shake, setShake] = useState<boolean>(false),
    matches = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    let animation;
    if (shake) {
      animation = gsap.to([infoRef.current, iconRef.current], {
        rotate: 1,
        repeat: -1,
        yoyo: true,
        duration: 0.2,
        ease: "back.in",
      });
    } else {
      animation = gsap.to([infoRef.current, iconRef.current], {
        rotate: 0,
        repeat: 0,
        yoyo: false,
        duration: 0,
      });
    }
    return () => {
      animation.kill();
    };
  }, [shake]);

  const handleEnter = () => {
    if (!shake) {
      setShake(true);
    }
  };

  const handleLeave = () => {
    if (shake) {
      setShake(false);
    }
  };

  return (
    <Box
      sx={{
        mt: 3,
        width: "100%",
        position: "relative",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="contact-info"
    >
      <img
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/pink-background.jpg"
        alt=""
      />
      <a
        href="#"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-60%, -50%)",
        }}
      >
        <Box ref={iconRef}>{icon}</Box>
        <Box
          ref={infoRef}
          sx={{
            fontSize: `${matches ? "0.9rem" : "1.3rem"}`,
            mt: 2,
            fontFamily: "arial",
            fontWeight: 600,
          }}
        >
          {contact}
        </Box>
      </a>
    </Box>
  );
};

export default function MainFooter() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Box
        className="footer-container"
        sx={{ height: `${matches ? "100%" : "100vh"}` }}
        id="contact"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "arial",
              fontSize: "3rem",
            }}
          >
            CONTACT
          </h1>
          <img
            style={{ transform: "rotate(-30deg)" }}
            src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-wedding-dress-design-png-image_7032599.png"
            alt="image"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: `${matches ? "column" : "row"}`,
          }}
        >
          <Contact
            icon={
              <PhoneIphoneOutlinedIcon
                sx={{ fontSize: "2rem", color: "white" }}
              />
            }
            contact={"(+84) 93 196 90 91"}
          />
          <Contact
            icon={<MailOutlineIcon sx={{ fontSize: "2rem", color: "white" }} />}
            contact={"info@luyenacademy.com"}
          />
        </Box>
        <Box sx={{ fontFamily: "arial", p: 3 }}>
          <h1>ĐỊA CHỈ</h1>
          <p style={{ marginTop: "1rem" }}>
            410 Đ. Nguyễn Văn Tạo, Long Thới, Nhà Bè, Hồ Chí Minh
          </p>
        </Box>
      </Box>
    </div>
  );
}
