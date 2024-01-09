import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "20px",
            color: "#FFF",
            background: "#ffa9a9",
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
            background: "#fcc757",
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
        fontSize="20px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
