import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useSelector } from "react-redux";
const Workexperience2 = () => {
  const reduxStore = useSelector((state) => state.dataForm.workExperience);
  const [data, setData] = useState("");

  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
    
      {data &&
        data.map((item, index) => {
          const { name,
            position,
            url,
            startDate,
            endDate,
            summary,
            highlights,}=item
          return (
            <Box
            key={index}
              sx={{
                display: "flex",
                borderBottom: 3,
                borderColor: "black",
                width: "auto",
                height: "auto",
                pb: 3,
                pt: 0.8,
                pl: 3,
                boxSizing: "border-box",
                // justifyContent: "space-between",
                // gap: 6.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  gap: 5,
                  flexGrow: 0.07,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "black", fontWeight: "600" }}
                >
                  Experience
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  // justifyContent: "center",
                  flexGrow: 0.9,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "black", fontWeight: "400", fontSize: 21 }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 18, fontWeight: 400, lineHeight: 2 }}
                >
                  {position}
                </Typography>
                <Box sx={{ display: "flex",alignItems:'center',justifyContent:'start' ,ml:'-6px'}}>
                  <Box component={'span'} 

                  >
                    <AttachFileIcon />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: 18,
                        fontWeight: 400,
                        lineHeight: 2,
                        textDecoration: "underline",
                      }}
                    >
                      {url}
                    </Typography>
                  </Box>
                  
                </Box>
                <Box
                  sx={{
                    fontSize: 18,
                    fontWeight: 800,
                    lineHeight: 2,
                    textAlign: "start",
                  }}
                  component={"span"}
                >
                  {startDate} / {endDate}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "200px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 18, fontWeight: 600, lineHeight: 2 }}
                  >
                    Summary
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 15, fontWeight: 400,  }}
                  >
                    {summary}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap:'wrap' }}>
                  {highlights && highlights.map((item,index)=>{
                    return(
                      <Box key={index} sx={{ display: "flex", alignItems: "center" ,}}>
                    <Box component={"span"} sx={{ fontSize: 15 }}>
                      <FiberManualRecordIcon sx={{ transform: "scale(0.6)" }} />
                    </Box>
                    <Box
                      component={"span"}
                      sx={{ fontSize: 17, fontWeight: 400 }}
                    >
                      {item}
                    </Box>
                  </Box>
                    )
                  })}
                </Box>
               
              </Box>
            </Box>
          );
        })}
    </>
  );
};

export default Workexperience2;
