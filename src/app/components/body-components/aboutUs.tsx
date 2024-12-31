import { Box, useMediaQuery } from "@mui/material";

export default function AboutPage() {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box className="about-us" id="about">
      <Box
        sx={{
          height: `${matches ? "100%" : "100vh"}`,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>ABOUT US</h1>
        <Box
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            flexDirection: `${matches ? "column" : "row"}`,
          }}
        >
          <img
            src="https://storage.cloud.google.com/luyen-wedding-academy-bucket/dress.jpg"
            alt="picture"
          />
          <Box
            sx={{
              height: "100%",
              alignContent: "center",
              //   borderLeft: "1px black solid",
              p: 4,
              fontSize: "1.4rem",
            }}
          >
            <p>
              The copy here is strong and to the point. It also addresses so
              much more than the croissants and cookies. These cafes are each “a
              place for communities to gather, to feel welcomed, to create a
              sense of home and belonging.” And the mission is to continue this
              presence and community: “We are here to inspire, care for and
              nurture life. Every day.” Now, that’s a lofty goal. But for a
              beloved local brand whose food is well-known, it’s perfect for the
              about us page. This lets visitors know why Tatte exists—and the
              reason is so much more compelling than selling coffee and treats.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
