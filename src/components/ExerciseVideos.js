import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        bgcolor: "#1B1D1F",
      }}
      p="20px"
    >
      {!exerciseVideos.length ? (
        <Typography
          mb="33px"
          ml="33px"
          sx={{
            fontSize: { lg: "22px" },
            color: "white",
          }}
        >
          Loading your videos...
        </Typography>
      ) : (
        <Typography
          mb="33px"
          ml="33px"
          sx={{
            fontSize: { lg: "22px" },
            color: "white",
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
      )}

      <Stack
        alignItems="center"
        sx={{
          paddingLeft: { lg: "30px" },
          flexDirection: { lg: "row" },
          gap: { lg: "60px", xs: "0" },
          paddingBottom: { lg: "50px" },
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
              style={{
                borderTopLeftRadius: "20px",
                border: "2px solid white",
              }}
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
