import React from "react";
import { CodeCopy } from "./CodeCopy";
import { DisplayMono, H2, Paragraph } from "./Text";

import { Box, Container } from "./UI";

export const HomeSupport = () => {
  return (
    <Container
      as="section"
      css={{
        position: "relative",
        textAlign: "center",
      }}
    >
      <DisplayMono>Funding</DisplayMono>
      <H2 as="h3" css={{ margin: "$2 0 $4 0" }}>
        Support Leva
      </H2>
      <Paragraph css={{ maxWidth: "38ch", margin: "0 auto" }}>
        If you like this project, please consider helping out. All contributions
        are welcome as well as donations to opencollective, or in crypto.
      </Paragraph>
      <Box css={{ margin: "$6 auto 0 auto" }}>
        <CodeCopy
          prefix="$"
          text="https://opencollective.com/leva"
          label="Open Collective"
        />
      </Box>
      <Box css={{ margin: "$3 auto" }}>
        <CodeCopy
          prefix="₿"
          text="36fuguTPxGCNnYZSRdgdh6Ea94brCAjMbH"
          label="Bitcoin"
        />
      </Box>
      <Box css={{ margin: "0 auto" }}>
        <CodeCopy
          prefix="Ξ"
          text="0x6E3f79Ea1d0dcedeb33D3fC6c34d2B1f156F2682"
          label="Ethereum"
        />
      </Box>
    </Container>
  );
};
