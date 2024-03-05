// PDFContext.js
import React, { createContext, useContext, useState } from "react";
import { usePDF } from "react-to-pdf";

const PDFContext = createContext();

export const PDFProvider = ({ children }) => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [accordionOpen, setAccordionOpen] = useState({
    basicInfo: false,
    workExperience: false,
    skills: false,
    projects: false,
    education: false,
    interests: false,
    languages: false,
    certification: false,
  });
  const [templateNo,setTemplateNO]=useState(1)
  const [questionArray, setQuestionArray] = useState([]);
  
  const [pdfState, setPDFState] = useState({
    toPDF: null,
    targetRef: null,
  });

  const setPDF = ({ toPDF, targetRef }) => {
    setPDFState({ toPDF, targetRef });
  };
  const values = {
    toPDF,
    targetRef,
    setPDF,
    accordionOpen,
    setAccordionOpen,
    templateNo,setTemplateNO,
    questionArray, setQuestionArray,
  };

  return <PDFContext.Provider value={values}>{children}</PDFContext.Provider>;
};

export const usePDFContext = () => useContext(PDFContext);
