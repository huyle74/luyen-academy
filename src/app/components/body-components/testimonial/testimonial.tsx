import { Box, Grid2, useMediaQuery } from "@mui/material";

export default function Testimonial() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box className="testimonial" >
      <Box
        sx={{
          height: `${matches ? "100%" : "100vh"}`,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f01267",
          alignContent: "space-between",
        }}
      >
        <h1
          style={{
            fontFamily: "Mali",
            margin: "auto",
            color: "white",
            fontSize: `${matches ? "1rem" : ""}`,
            padding: `${matches ? "1rem 0 1rem 0" : "0"}`,
          }}
        >
          HỌC VIÊN NGHĨ GÌ VỀ LUYẾN ACADEMY
        </h1>
        <Box sx={{ height: "fit-content" }}>
          <Grid2 container>
            <Grid2 size={{ md: 4, xs: 6 }} className="testimonial-container">
              <div className="testimonial-image-container">
                <img
                  src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/luyen-academy-pics/464213425_122135750666351735_5787463853231942787_n.jpg"
                  alt="image"
                />
              </div>
              <Box className="testimonial-text">
                <img
                  src="https://www.svgrepo.com/show/517628/lyne.svg"
                  alt="symbol"
                />
                <p
                  style={{
                    width: "80%",
                    fontSize: `${matches ? "0.8rem" : "1.2rem"}`,
                  }}
                >
                  I made an amazing wedding dress for my daughter and it was my
                  FIRST TIME making a dress ever!
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 4, xs: 6 }} className="testimonial-container">
              <Box className="testimonial-text">
                <img
                  src="https://www.svgrepo.com/show/518072/myntra.svg"
                  alt="symbol"
                />
                <p
                  style={{
                    width: "80%",
                    fontSize: `${matches ? "0.8rem" : "1.2rem"}`,
                  }}
                >
                  My very first corset came out perfect! This success led to
                  more orders and helped grow my business.
                </p>
              </Box>
              <div className="testimonial-image-container">
                <img
                  src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/luyen-academy-pics/464242671_122135901572351735_4109879563579865501_n.jpg"
                  alt="image"
                />
              </div>
            </Grid2>
            <Grid2 size={{ md: 4, xs: 12 }} className="testimonial-container">
              <div className="testimonial-image-container">
                <img
                  src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/luyen-academy-pics/464381132_122135901500351735_1311977758340540686_n.jpg"
                  alt="image"
                />
              </div>
              <Box className="testimonial-text">
                <img
                  src="https://www.svgrepo.com/show/520452/zalando.svg"
                  alt="symbol"
                />
                <p
                  style={{
                    width: "80%",
                    fontSize: "1.2rem",
                  }}
                >
                  I made my own wedding dress and full-length corset dresses for
                  my sister and mother!
                </p>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}
