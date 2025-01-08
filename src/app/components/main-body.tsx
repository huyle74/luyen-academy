import { Box } from "@mui/material";

import EntryBody from "./body-components/head-entry/head";
import Testimonial from "./body-components/testimonial/testimonial";
import Teacher from "./body-components/teacher";
import Products from "./body-components/products";
import AboutPage from "./body-components/aboutUs";

export default function MainBody() {
  return (
    <Box className='body'>
      <EntryBody />
      <Testimonial />
      <Teacher />
      <Products />
      <AboutPage />
    </Box>
  );
}
