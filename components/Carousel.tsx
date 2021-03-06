import React, { Children } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { styled } from "@styles/stitches.config";
import { Box, Flex, Grid } from "./UI";

const ScrollRoot = styled(ScrollArea.Root, {});

const ScrollViewport = styled(ScrollArea.Viewport, {
  scrollSnapType: "x mandatory",
});

export const Carousel = ({ children }) => {
  const count = Children.count(children);

  return (
    <ScrollRoot>
      <ScrollViewport>
        <Box
          css={{
            padding: "$1",
            gap: "$8",
            display: "grid",
            gridTemplateColumns: `repeat(${count}, minmax(0px, 1fr))`,
            width: `calc(${count * 100}% + ${count - 1} * $8)`,
            "@sm": {
              width: `calc(${(count / 2) * 100}% + ${0.5} * $8)`,
            },
            "@lg": {
              width: `calc(${(count / 3) * 100}% + ${count - 3} * $8)`,
            },
            "& > *": {
              scrollSnapAlign: "start",
            },
          }}
        >
          {children}
        </Box>
      </ScrollViewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollRoot>
  );
};
