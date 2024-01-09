import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData, exercisedbUrl } from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `${exercisedbUrl}/bodyPartList`,
        exerciseOptions
      );

      console.log(bodyPartsData);

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(exercisedbUrl, exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
      sx={{
        mr: { lg: "50px", xs: "80px" },
      }}
    >
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
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
