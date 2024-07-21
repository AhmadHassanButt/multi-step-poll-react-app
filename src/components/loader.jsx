import React from "react";
import { Box, CircularProgress, styled } from "@mui/material";

export const Loader = () => (
  <StyledBox>
    <CircularProgress />
  </StyledBox>
);

const StyledBox = styled(Box)({
  alignItems: "center",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
});
