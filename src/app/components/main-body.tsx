import { Box } from "@mui/material";

import EntryBody from "./body-components/head-entry/head";
import Testimonial from "./body-components/testimonial/testimonial";
import Teacher from "./body-components/teacher";
import Products from "./body-components/products";
import AboutPage from "./body-components/aboutUs";
import MainFooter from "./main-footer";

export default function MainBody() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      className="body-container"
      id='body-container'
    >
      <EntryBody />
      <Testimonial />
      <Teacher />
      <Products />
      <AboutPage />
      <MainFooter />
    </Box>
  );
}
