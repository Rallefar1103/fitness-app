import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function SearchExercises() {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "35px", xs: "27px" },
        }}
        mb="50px"
        textAlign="center"
        color="white"
      >
        Exercises you should know!
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              "&:focus": {
                outline: "none",
              },
              ml: "10px",
            },
            width: { lg: "800px", xs: "550px" },
            backgroundColor: "white",
            borderRadius: "40px",
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "110px" },
            fontSize: { lg: "20px", xs: "15px" },
            height: "56px",
            position: "absolute",
            ml: "10px",
            borderRadius: "30px",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;
