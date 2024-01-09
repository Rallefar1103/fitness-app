import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "6px solid #FF2625" : "",
        borderRadius: "20px",
        background: "#D9D1DB",
        width: "240px",
        height: "240px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        styles={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography fontSize="20px" fontWeight="500" color="black">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
