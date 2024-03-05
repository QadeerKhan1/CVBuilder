import React,{useEffect} from "react";
import DescriptionPart from "./descriptionPart/descriptionPart";
import MainContent from "./mainContent/mainContent";
import { Box ,Button} from "@mui/material";
import { usePDFContext } from "../../customHooks/contentHooks";
import DescriptionPart2 from "./descriptionPart/descriptionPart2";
import MainContent2 from "./mainContent/mainContent2";
import DescriptionPart1 from "./descriptionPart/descriptionPart1";
import MainContent1 from "./mainContent/mainContent1";


// const getTargetElement = () => document.getElementById("container");

// const downloadPdf = () => generatePDF(getTargetElement, options);

export default function CVBodySection1() {
  const { targetRef } = usePDFContext();
 
  return (
    <>
      <Box ref={targetRef} width={'100%'} pb={2} >
        <Box>
          <DescriptionPart1 />
        </Box>
        <Box width={'100%'}>
          <MainContent1/>
        </Box>
      </Box>
    </>
  );
}
