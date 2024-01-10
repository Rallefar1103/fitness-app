import React from "react";
import { Stack, Box } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

import BodyPart from "./BodyPart";

const HorizontalMuscleGroupList = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart,
}) => (
  <Stack
    direction="row"
    sx={{
      gap: { lg: "50px", xs: "30px" },
    }}
    flexWrap="wrap"
    justifyContent="center"
  >
    {data.slice(0, 5)?.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </Stack>
);

export default HorizontalMuscleGroupList;
