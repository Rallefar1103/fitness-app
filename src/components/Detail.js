import React from "react";
import { Typography, Stack, Button, Divider } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const exerciseExtraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      sx={{
        gap: { lg: "250px", xs: "50px" },
        flexDirection: { lg: "row" },
        pl: "50px",
        pt: "40px",
        pb: "50px",
        bgcolor: "#9E9E9E",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "45px", xs: "25px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
          color="#E61401"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="black"
          fontWeight="500"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> is one of
          the best <br /> exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>
        <Stack
          direction="row"
          sx={{
            gap: { lg: "100px", xs: "25px" },
          }}
        >
          {exerciseExtraDetail?.map((item) => (
            <Stack
              key={item.name}
              direction="column "
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "white",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "25px", xs: "20px" } }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
