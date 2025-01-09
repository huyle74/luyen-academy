"use client";

import { Box } from "@mui/material";

import MainHeader from "../components/main-header";
import Teacher from "../components/body-components/teacher";
import EntryBody from "../components/body-components/head-entry/head";
import ClassGallery from "../components/course/class-gallery";
import AllLesson from "./course-component/course";
import Products from "../components/body-components/products";
import AboutPage from "../components/body-components/aboutUs";
import MainFooter from "../components/main-footer";

export default function DecorCourse() {
  return (
    <Box sx={{ backgroundColor: "#212121", position: "relative", zIndex: 1 }}>
      <MainHeader />
      <Box className="body">
        <EntryBody />
        <ClassGallery>KHÓA TRANG TRÍ</ClassGallery>
        <Teacher />
        <AllLesson />
        <Products />
        <AboutPage />
      </Box>
      <MainFooter />
    </Box>
  );
}
