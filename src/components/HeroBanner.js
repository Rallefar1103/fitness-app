import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

function HeroBanner() {
  return (
    <Box
      sx={{
        ml: { sm: "50px" },
        mb: { lg: "220px", xs: "200px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#FF2625"
        fontWeight="700"
        sx={{
          mt: { lg: "80px", xs: "100px" },
          fontSize: { lg: "45px", xs: "40px" },
        }}
      >
        Welcome to Fitness Inspo
      </Typography>
      <Typography
        fontWeight={700}
        color="white"
        sx={{ fontSize: { lg: "65px", xs: "40px" } }}
      >
        Sweat, Smile and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5} color="white">
        The place to find inspiration for your next workout!
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#FF2625",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>
    </Box>
  );
}

export default HeroBanner;
