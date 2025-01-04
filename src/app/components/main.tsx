import { Box } from "@mui/material";

import MainHeader from "./main-header";
import MainBody from "./main-body";
import MainFooter from "./main-footer";

export default function Main() {
  return (
    <Box>
      <MainHeader />
      <MainBody />
      <MainFooter />
    </Box>
  );
}
