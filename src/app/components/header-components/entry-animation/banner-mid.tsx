import { ForwardedRef, forwardRef } from "react";
import { Box } from "@mui/material";

import { flex_config } from "@/app/utilities/style-components";

const Middle_banner = forwardRef<HTMLDivElement>(
  ({}, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Box
        sx={{
          height: "100%",
          fontSize: "6rem",
          flexWrap: "nowrap",
          position: "relative",
          width: "100%",
        }}
      >
        <Box
          ref={ref}
          className="entry-banner mid-banner"
          sx={{
            ...flex_config,
            position: "absolute",
            width: "max-content",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            height: "33vh",
            backgroundColor: "#fffcd3",
          }}
        >
          <p>Luyến Academy</p>
          <p>Luyến Academy</p>
          <p>Luyến Academy</p>
          <p>Luyến Academy</p>
        </Box>
      </Box>
    );
  }
);

export default Middle_banner;
