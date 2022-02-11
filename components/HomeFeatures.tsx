import React from "react";
import { Display2, DisplayMono, H1, H2, Paragraph } from "./Text";

import { Box, Container } from "./UI";

export const HomeFeatures = () => {
  return (
    <Container layout="home" as="section" css={{ position: "relative" }}>
      <DisplayMono>Batteries Included</DisplayMono>
      <Display2 as="h2" css={{ margin: "$2 0 $4 0", maxWidth: "30ch" }}>
        With 12 built-in input types, and unlimited flexibility for the most
        complex applications.
      </Display2>
    </Container>
  );
};
