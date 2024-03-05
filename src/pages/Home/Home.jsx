import React,{useMemo} from "react";
import NavigationBar from "../../components/navigationBar/navigationBar";
import DataForm from "../../components/dataForm/dataForm";
import { Box, Grid } from "@mui/material";
import CertificatesForm from "../../components/dataForm/certification/certification";
import EducationForm from "../../components/dataForm/education/education";
import InterestsForm from "../../components/dataForm/interest/interest";
import CVBodySection from "../../components/CVBodySection/CVBodySection";
import CVTemplates from "../../components/CVTemplates/cvTemplates";
import CVBodySection2 from "../../components/CVBodySection/CVBodySection2";
import CVBodySection1 from "../../components/CVBodySection/CVBodySection1";
import { usePDFContext } from "../../customHooks/contentHooks";
export default function Home() {
  const {templateNo,setTemplateNO}=usePDFContext();
  const TemplateHandler = useMemo(() => {
    if (templateNo === 1) {
      return <CVBodySection2 />;
    }
    else if (templateNo === 2) {
      return <CVBodySection />;
    } 
    else if (templateNo === 3) {
      return <CVBodySection1 />;
    } 
    return null;
  }, [templateNo]);
  
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box>
          <NavigationBar />
        </Box>

        <Box sx={{ width: "100%" }}>
          <Grid container>
            <Grid item sx={{ background: "#f2e8f4" }} sm={2.5}>
              <Box
                sx={{
                  boxSizing: "border-box",
                  width: "100%",
                  height: "100vh",
                  background: "#f2e8f4",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    width: "17px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f2e8f4",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#005149",
                    borderRadius: "20px",
                    border: "6px solid transparent",
                    backgroundClip: "content-box",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#a8bbbf",
                  },
                }}
              >
                <DataForm />
              </Box>
            </Grid>
            <Grid item sm={7.5}>
              <Box
                sx={{
                  width: "100%",
                  height: "100vh",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    width: "20px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f2e8f4",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#005149",
                    borderRadius: "20px",
                    border: "6px solid transparent",
                    backgroundClip: "content-box",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#a8bbbf",
                  },
                }}
              >
                {TemplateHandler}
              </Box>
            </Grid>
            <Grid item sx={{ background: "#f2e8f4",}} sm={2}>
              <Box
                sx={{
                 
                  boxSizing: "border-box",
                  width: "100%",
                  height: "100vh",
                  background: "#f2e8f4",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    width: "17px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f2e8f4",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#005149",
                    borderRadius: "20px",
                    border: "6px solid transparent",
                    backgroundClip: "content-box",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#a8bbbf",
                  },
                }}
              >
                <CVTemplates />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
