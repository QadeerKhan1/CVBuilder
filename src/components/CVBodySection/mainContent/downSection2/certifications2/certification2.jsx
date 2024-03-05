import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useSelector } from "react-redux";
const Certification2 = () => {
  const reduxStore = useSelector((state) => state.dataForm.certification);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);

  return (
    <> 
               {data.length>0 &&
                <Box
                sx={{
                  display: "flex",
                  borderBottom: 3,
                  borderColor: "black",
                  width: "auto",
                  height: "auto",
                  pb: 3,
                  pt: 0.8,
                  pl: 3,
                  justifyContent: "space-around",
                  // gap: 6.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    pl: 1,
                    boxSizing: "border-box",
                    gap: 5,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "black", fontWeight: "600" }}
                  >
                    Certifications
                  </Typography>
                </Box>
                 <Box sx={{display:'flex',flexDirection:'column',gap:2,width:'100%'}}>
                 {data &&
          data.map((item, index) => {
            const { name, startDate, endDate, issuer } = item;
            return (
                 <Box
                key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    pr: 4,
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 0.94,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "black", fontWeight: "400", fontSize: 21 }}
                    >
                      {name}
                    </Typography>
  
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{ fontSize: 18, fontWeight: 800, lineHeight: 2 }}
                          component={"span"}
                        >
                          {startDate} / {endDate}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 18, fontWeight: 600, lineHeight: 2 }}
                      >
                        Issure
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 18, fontWeight: 500, lineHeight: 2 }}
                      >
                        {issuer}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                 );
                })}
                 </Box>
              </Box>
               
               }
           
         
    </>
  );
};

export default Certification2;
