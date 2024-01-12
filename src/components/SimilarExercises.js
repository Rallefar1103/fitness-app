import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises }) => {
  let isMusclesNonEmpty = targetMuscleExercises.length !== 0;
  return (
    <Box
      sx={{
        bgcolor: "#1B1D1F",
        paddingBottom: "20px",
      }}
    >
      {isMusclesNonEmpty ? (
        <Typography
          sx={{ fontSize: { lg: "22px", xs: "25px" }, ml: "35px" }}
          color="white"
          mb="33px"
          pl="20px"
        >
          Similar{" "}
          <span
            style={{
              color: "#FF2625",
              textTransform: "capitalize",
              fontWeight: "700",
            }}
          >
            Target Muscle
          </span>{" "}
          exercises
        </Typography>
      ) : (
        <Typography
          sx={{ fontSize: { lg: "22px", xs: "25px" }, ml: "35px" }}
          color="white"
          mb="33px"
          pl="20px"
        >
          Loading similar exercises...
        </Typography>
      )}

      {isMusclesNonEmpty ? (
        <Stack
          direction="row"
          sx={{
            paddingLeft: { lg: "30px" },
            gap: { lg: "50px", xs: "30px" },
          }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {targetMuscleExercises.map((item, index) => (
            <ExerciseCard
              exercise={item}
              key={index}
              isSimilarExercise={true}
            />
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
