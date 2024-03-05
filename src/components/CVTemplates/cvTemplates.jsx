import React from "react";
import { Box } from "@mui/material";
import template1 from "../../assets/templat1.png";
import template2 from "../../assets/temp.png";
import template3 from "../../assets/temp2.png";

import { usePDFContext } from "../../customHooks/contentHooks";

export default function CVTemplates() {
  const { templateNo, setTemplateNO } = usePDFContext();

  return (
    <>
      <Box
        onClick={() => {
          setTemplateNO(1);
        }}
        sx={{
          transform: `scale(${templateNo === 1 ? 0.85 : 0.7})`,
          border: `solid ${templateNo === 1 ? "4px #005149" : "2px"}`,
          transition: "transform 0.3s ease",
          marginTop: "-20px",
          ":hover": {
            cursor: "pointer",
            transform: "scale(0.8)",
          },
        }}
        tabIndex="0" // Add tabindex to make the Box focusable
      >
        <img src={template1} alt="" width={"100%"} height={"100%"} />
      </Box>
      <Box
        onClick={() => {
          setTemplateNO(2);
        }}
        sx={{
          transform: `scale(${templateNo === 2 ? 0.85 : 0.7})`,
          border: `solid ${templateNo === 2 ? "4px #005149" : "2px"}`,
          transition: "transform 0.3s ease",
          marginTop: "-40px",
          ":hover": {
            cursor: "pointer",
            transform: "scale(0.8)",
          },
        }}
        tabIndex="0" // Add tabindex to make the Box focusable
      >
        <img src={template2} alt="" width={"100%"} height={"100%"} />
      </Box>
      <Box
        onClick={() => {
          setTemplateNO(3);
        }}
        sx={{
          transform: `scale(${templateNo === 3 ? 0.85 : 0.7})`,
          border: `solid ${templateNo === 3 ? "4px #005149" : "2px"}`,
          transition: "transform 0.3s ease",
          marginTop: "-40px",
          ":hover": {
            cursor: "pointer",
            transform: "scale(0.8)",
          },
        }}
        tabIndex="0" // Add tabindex to make the Box focusable
      >
        <img src={template3} alt="" width={"100%"} height={"100%"} />
      </Box>
    </>
  );
}
