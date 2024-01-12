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
        gap: { lg: "100px", xs: "50px" },
        flexDirection: { lg: "row" },
        pl: "50px",
        pt: "40px",
        pb: "50px",
        bgcolor: "#1B1D1F",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "25px" } }}>
        <Typography
          sx={{
            fontSize: { lg: "60px", xs: "30px" },
            paddingRight: { lg: "20px" },
          }}
          fontWeight={500}
          textTransform="capitalize"
          color="#F8F8F8"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: "20px", xs: "18px" },
            paddingRight: { lg: "20px" },
          }}
          color="#F8F8F8"
          fontWeight="200"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> is one of
          the best exercises to target your {target}. It will help you improve
          your mood and gain energy.
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
              <Typography
                textTransform="capitalize"
                sx={{
                  fontSize: { lg: "20px", xs: "20px" },

                  color: "white",
                }}
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
