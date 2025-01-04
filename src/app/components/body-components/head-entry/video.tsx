import { Box, useMediaQuery } from "@mui/material";

export default function TiktokVideo() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box
      sx={{
        width: "40%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
      className="video-container"
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          left: `${matches ? "-80%" : "-30%"}`,
          top: `${matches ? "-30%" : "-10%"}`,
          width: "max-content",
        }}
      >
        <p
          style={{
            marginRight: `${matches ? 0 : "10px"}`,
            fontSize: `${matches ? "1.2rem" : "1.5rem"}`,
          }}
        >
          Hình ảnh lớp học
        </p>
        <img
          src="https://www.svgrepo.com/show/24700/3d-forward-arrow.svg"
          alt="Class"
        />
      </Box>
      <video
        src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/class-clip.mp4"
        autoPlay
        loop
        muted
        controls
        id="tiktok-clip"
        style={{
          height: `${matches ? "40vh" : "80vh"}`,
          marginRight: `${matches ? "20px" : "40px"}`,
        }}
      />
    </Box>
  );
}
