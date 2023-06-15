"use client";

import * as React from "react";

// CSS
import "./styles.css";

// Components Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <>
      <main>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "450px",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px 0 0 0",
            gap: "15px",
            padding: "35px 15px",
            backgroundColor: "rgba(217, 217, 217, 0.52)",
            borderRadius: "15px",
            boxShadow: "0px 10px 22px 0px rgba(0, 0, 0, 0.299)",
          }}
          noValidate
          autoComplete="off"
        >
          <h3>Faça o Login aqui!</h3>
          <TextField
            id="label-email"
            type="email"
            label="Email"
            name="email"
            variant="outlined"
            sx={{
              width: "100%",
              backgroundColor: "white",
            }}
          />
          <TextField
            id="label-password"
            type="password"
            label="Password"
            name="password"
            variant="outlined"
            sx={{
              width: "100%",
              backgroundColor: "white",
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "100%",
            }}
          >
            Entrar
          </Button>
        </Box>
      </main>
    </>
  );
}
