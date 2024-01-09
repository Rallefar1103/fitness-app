import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HeroBannerImg from "../assets/images/fitness-home-pic.jpg";

function Home() {
  return (
    <Box
      width="400px"
      sx={{
        width: { xl: "100vw" },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        m: "auto",
      }}
    >
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
}

export default Home;
