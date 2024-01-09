import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box pb="15px" bgcolor="#F3F3F5">
    <Stack gap="40px" sx={{ alignItems: "center" }} flexWrap="wrap">
      <img src={Logo} alt="logo" style={{ width: "70px", height: "70px" }} />
    </Stack>
    <Typography
      sx={{ fontSize: { lg: "15px", xs: "15px" } }}
      textAlign="center"
    >
      Fitness Inspo by Rasmus Henriksen
    </Typography>
  </Box>
);

export default Footer;
