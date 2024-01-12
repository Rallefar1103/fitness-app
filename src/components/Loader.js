import React from "react";
import { Stack, Box } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1B1D1F",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <InfinitySpin color="white" />
      </Stack>
    </Box>
  );
};

export default Loader;
