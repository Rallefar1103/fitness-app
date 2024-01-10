import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises }) => {
  let isMusclesNonEmpty = targetMuscleExercises.length !== 0;
  return (
    <Box mb="25px">
      <Typography
        sx={{ fontSize: { lg: "30px", xs: "25px" }, ml: "35px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
        pl="20px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      {isMusclesNonEmpty ? (
        <Stack
          direction="row"
          sx={{
            gap: { lg: "50px", xs: "30px" },
          }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {targetMuscleExercises.map((item, index) => (
            <ExerciseCard exercise={item} key={index} />
          ))}
        </Stack>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default SimilarExercises;

//<HorizontalMuscleGroupList data={targetMuscleExercises} />
