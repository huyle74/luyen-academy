import { Box, Grid2, useMediaQuery, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type ChildProps = {
  onClick: () => void;
};

const Courses: React.FC<ChildProps> = ({ onClick }) => {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <Box
      sx={{
        width: "100%",
        height: 0,
        position: "absolute",
        backgroundColor: "#f9f4f1",
        top: `${matches ? 0 : "100%"}`,
        bottom: `${matches ? "100%" : 0}`,
        alignContent: "center",
        overflow: "hidden",
      }}
      id="course-list"
    >
      <Box
        sx={{
          width: "40%",
          m: "auto",
          height: "100%",
          alignContent: "center",
        }}
      >
        {matches ? (
          <Button
            sx={{
              color: "black",
              mb: 4,
            }}
            startIcon={<ArrowBackIcon />}
            onClick={onClick}
          >
            Trở lại
          </Button>
        ) : (
          ""
        )}
        <Grid2 container spacing={3}>
          <Grid2 size={{ md: 6 }}>
            <a href="/basic-course">Khóa Cơ Bản</a>
          </Grid2>
          <Grid2 size={{ md: 6 }}>
            <a href="#">Khóa Nâng Cao</a>
          </Grid2>
          <Grid2 size={{ md: 6 }}>
            <a href="#">Khóa Trang Trí</a>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};
export default Courses;
