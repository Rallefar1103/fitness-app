import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData, exercisedbUrl } from "../utils/fetchData";

import HorizontalMuscleGroupList from "./HorizontalMuscleGroupList";

const filterBodyParts = (parts) => {
  const allowedParts = [
    "chest",
    "back",
    "upper legs",
    "shoulders",
    "upper arms",
  ];
  let filteredParts = parts.filter((part) =>
    allowedParts.some((allowedPart) => part.toLowerCase().includes(allowedPart))
  );

  return filteredParts;
};

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `${exercisedbUrl}/bodyPartList`,
        exerciseOptions
      );

      const filteredBodyParts = filterBodyParts(bodyPartsData);

      console.log(filteredBodyParts);

      setBodyParts([filteredBodyParts[0], ...filteredBodyParts.slice(1, 5)]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=200",
        exerciseOptions
      );

      console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
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
        <HorizontalMuscleGroupList
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          bodyParts
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
