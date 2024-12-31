import { Box, Grid2, useMediaQuery } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Teacher() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#212121",
          height: `${matches ? "100%" : "100vh"}`,
          display: "flex",
          flexDirection: "column",
        }}
        className="teacher"
        id='teacher'
      >
        <h1
          style={{
            fontSize: `${matches ? "2rem" : "3rem"}`,
            marginTop: `${matches ? "2rem" : "auto"}`,
          }}
        >
          GẶP GỠ GIẢNG VIÊN
        </h1>
        <Grid2 container sx={{ mt: "auto" }}>
          <Grid2
            size={{ md: 5, xs: 12 }}
            sx={{
              // border: "1px white solid",
              position: "relative",
              pl: 5,
              height: `${matches ? "35vh" : "100%"}`,
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/042/057/892/small_2x/ai-generated-female-teacher-with-eyeglasses-isolated-on-transparent-background-png.png"
              alt="TEACHER"
            />
            <Box
              sx={{
                backgroundColor: "#fbe3d9",
                width: "40%",
                height: "80%",
                position: "absolute",
                bottom: "0",
              }}
            ></Box>
          </Grid2>
          <Grid2
            size={{ md: 7, xs: 12 }}
            sx={{
              pl: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                height: "3rem",
                // border: "1px white solid",
                width: `${matches ? "100%" : "70%"}`,
                mt: `${matches ? "1rem" : 0}`,
                fontSize: `${matches ? "1rem" : "2rem"}`,
              }}
            >
              <h2>Ms. Luyen Dang</h2>
              <Box
                sx={{
                  color: "#3896f0",
                  pl: "1rem",
                }}
              >
                <VerifiedIcon sx={{ height: "3rem", fontSize: "3rem" }} />
              </Box>
            </Box>
            <Box sx={{ mt: "2rem", width: `${matches ? "100%" : "70%"}` }}>
              <h3>
                <p>&#8226;</p>
                <p>Founder and lead designer at "Luyen Academy".​</p>
              </h3>
              <h3>
                <p>&#8226;</p>
                <p>
                  Recognized as a worldwide wedding fashion designer with 25
                  years of experience.
                </p>
              </h3>
              <h3>
                <p>&#8226;</p>
                <p>Tatiana's YouTube channel passed 100,000 subscribers.</p>
              </h3>
              <h3>
                <p>&#8226;</p>
                <p>
                  Acclaimed tutor and former BurdaStyle lead wedding and
                  corset-making instructor.
                </p>
              </h3>
              <h3>
                <p>&#8226;</p>
                <p>Tatiana's YouTube channel passed 100,000 subscribers.</p>
              </h3>
            </Box>
            <Box
              sx={{
                pl: 7,
                height: "20vh",
                alignContent: "center",
                fontFamily: "arial",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: 4,
                  fontSize: "1rem",
                }}
              >
                <PhoneAndroidIcon sx={{ fontSize: "2rem" }} />
                <p>+84 909 099 999</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: 4,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                <FacebookIcon sx={{ fontSize: "2rem" }} />
                <p>Luyen Dang</p>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
