import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length)
    return (
      <Box alignContent="center" alignItems="center">
        <Loader />
      </Box>
    );
  return (
    <Box
      sx={{
        marginTop: { lg: "20px", xs: "20px" },
        marginLeft: { lg: "35px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography
        mb="33px"
        sx={{
          fontSize: { lg: "22px" },
        }}
      >
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
            fontWeight: "700",
          }}
        >
          {name}
        </span>{" "}
        exercise videos for more details!
      </Typography>
      <Stack
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "90px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
