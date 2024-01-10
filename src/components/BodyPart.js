import React from "react";
import { Stack, Typography } from "@mui/material";
import ArmsIcon from "../assets/icons/arms.png";
import BackIcon from "../assets/icons/back.png";
import ChestIcon from "../assets/icons/chest.png";
import LegsIcon from "../assets/icons/legs.png";
import ShouldersIcon from "../assets/icons/shoulder.png";
import DefaultLogo from "../assets/icons/gym.png";

function capitalizeNewWord(string) {
  return string.replace(/\b(\w)/g, function (s) {
    return s.toUpperCase();
  });
}

const iconPaths = {
  chest: ChestIcon,
  back: BackIcon,
  shoulders: ShouldersIcon,
  arms: ArmsIcon,
  legs: LegsIcon,
};

const getIconPath = (muscleGroup) => {
  const muscleGroupName = muscleGroup.toLowerCase();

  return iconPaths[muscleGroupName] || DefaultLogo;
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const iconPath = getIconPath(item);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "white",
        borderRadius: "20px",
        minWidth: "140px",
        minHeight: "140px",
        p: 2,
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={iconPath}
        alt="dumbbell"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        fontSize={{ lg: "20px", xs: "14px" }}
        fontWeight="500"
        textAlign="center"
        color="black"
      >
        {capitalizeNewWord(item)}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
