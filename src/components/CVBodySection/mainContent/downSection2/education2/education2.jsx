import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { useSelector } from "react-redux";
const Education2 = () => {
  const reduxStore = useSelector((state) => state.dataForm.education);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  const flexDirectionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
         {data.length>0 &&
            <Box
              sx={{
                width: "100%",
                display: "flex",
                borderBottom: 3,
                borderColor: "black",
                pb: 3,
                pt: 0.8,
                pl: 3,
                boxSizing:'border-box'
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
                  flexGrow: 0.08,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "black", fontWeight: "600" }}
                >
                  Education
                </Typography>
              </Box>
              <Box sx={{display:'flex',flexDirection:'column',gap:2,width:'100%'}}>
              {
        data.map((item, index) => {
          const {
            institution,
            Title,
            Qualification,
            startDate,
            endDate,
            score,
          } = item;
          return (
              <Box sx={{display:'flex',justifyContent:'space-around',width:'100%',pr: 4,pl:7, boxSizing: "border-box",}}>
                      
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  // justifyContent: "center",
                  flexGrow: 0.89,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "black", fontWeight: "400", fontSize: 21 }}
                >
                  {institution}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 18, fontWeight: 400, lineHeight: 2 }}
                >
                  {Title}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "center",
                      // border: 1,
                    }}
                  >
                    <CreditScoreIcon />
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
                      }}
                    >
                      {score}
                    </Typography>
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
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "18px", fontWeight: "700", lineHeight: 2 }}
                  >
                    Present
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ fontSize: 18, fontWeight: 400, lineHeight: 2 }}
                    component={"span"}
                  >
                    {Qualification}
                  </Box>
                  <Box
                    sx={{ fontSize: 18, fontWeight: 800, lineHeight: 2 }}
                    component={"span"}
                  >
                    {startDate} / {endDate}
                  </Box>
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

export default Education2;
