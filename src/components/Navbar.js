import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <Stack
      direction="row"
      justify-content="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        justifyContent: "none",
        backgroundColor: "#F3F3F5",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0, 20px",
          }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        sx={{
          paddingBottom: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "black" }}>
          Exercises
        </a>
        <Link></Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
