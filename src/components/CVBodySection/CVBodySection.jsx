import React,{useEffect} from "react";
import DescriptionPart from "./descriptionPart/descriptionPart";
import MainContent from "./mainContent/mainContent";
import { Box ,Button} from "@mui/material";
import { usePDFContext } from "../../customHooks/contentHooks";
import DescriptionPart2 from "./descriptionPart/descriptionPart2";
import MainContent2 from "./mainContent/mainContent2";


// const getTargetElement = () => document.getElementById("container");

// const downloadPdf = () => generatePDF(getTargetElement, options);

export default function CVBodySection() {
  const { targetRef } = usePDFContext();
 
  
  return (
    <>
      <Box ref={targetRef} width={'100%'} >
        <Box>
          <DescriptionPart2 />
        </Box>
        <Box width={'100%'}>
          <MainContent2/>
        </Box>
      </Box>
    </>
  );
}
