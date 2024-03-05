import { Box } from "@mui/material";
import React from "react";

import Education2 from "./education2/education2";
import Workexperience2 from "./workexperience2/workexperience2";
import Summary from "./summary/summary";
import Skills2 from "./skills2/skills2";
import Languages2 from "./languages2/languages2";
import Certification2 from "./certifications2/certification2";
import Interest2 from './interest2/interest2'
export default function Downsection2() {
  return (
    <>
      <Box
        sx={{
          width:'100%',
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box >
          <Education2 />
        </Box>
        <Box >
          <Summary />
        </Box>
        <Box >
          <Workexperience2 />
        </Box>
        <Box >
          <Skills2 />
        </Box>
        <Box >
          <Certification2 />
        </Box>
        <Box >
          <Languages2 />
        </Box>
        <Box >
          <Interest2 />
        </Box>
      </Box>
    </>
  );
}
