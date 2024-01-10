import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, Box } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Box
        sx={{
          mt: "25px",
          pr: "10px",
        }}
      >
        <Stack direction="row">
          <Button
            sx={{
              ml: "20px",
              color: "#FFF",
              background: "#ff2625",
              fontSize: "10px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "20px",
              color: "#FFF",
              background: "#FCCF43",
              fontSize: "10px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="23px"
          color="black"
          fontWeight="bold"
          mt="10px"
          pb="10px"
          textTransform="capitalize"
          fontSize="17px"
          pad
        >
          {exercise.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default ExerciseCard;
