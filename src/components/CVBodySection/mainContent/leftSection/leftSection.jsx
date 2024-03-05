import { Box, Typography } from "@mui/material";
import React from "react";
import Education from "./Education/education";
import Projects from "./projects/projects";
import WorkExperience from "./workExperience/workExperience";

export default function LeftSection() {
 
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',gap:6}}>
    <Box>
    <Education/>
    </Box>
    <Box>
        <Projects/>
    </Box>
    <Box>
        <WorkExperience/>
    </Box>
    </Box>

    </>
  );
}
