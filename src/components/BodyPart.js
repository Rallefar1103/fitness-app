import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

function capitalizeNewWord(string) {
  return string.replace(/\b(\w)/g, function (s) {
    return s.toUpperCase();
  });
}

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
        background: "#F3F3F5",
        width: "120px",
        height: "120px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        styles={{
          width: "10px",
          height: "10px",
        }}
      />
      <Typography fontSize="20px" fontWeight="500" color="black">
        {capitalizeNewWord(item)}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
