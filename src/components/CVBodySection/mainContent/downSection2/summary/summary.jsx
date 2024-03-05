import React,{useState,useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const Summary = () => {
  const reduxStore = useSelector((state) => state.dataForm.projects);
  const [data, setData] = useState("");
  
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
            {data && data.map((item,index) => {
              const {technology,
                title,
                overview,
                description,
                githubLink,}=item
              return(
                <Box
                key={index}
                sx={{
                  display: "flex",
                  borderBottom: 3,
                  borderColor: "black",
                  pb: 3,
                  pt: 2,
                  pl: 4,
                  pr:4,
                  boxSizing:'border-box',
                  // justifyContent: "space-between",
                  gap: 9,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <Typography variant="h5" sx={{ color: "", fontWeight: "600" }}>
                    Projects
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent:'space-around',
                    width:'100%'
                  }}
                >
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
                  {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 18, fontWeight: 400, lineHeight: 2 }}
                  >
                  Tech : {technology && technology.map((item,index)=> (<Box component={'span'}>{item},</Box>))}
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
                      Url : 
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
                        {githubLink}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxSizing:'border-box',
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: 18, fontWeight: 600, lineHeight: 2 }}
                    >
                      Description
                    </Typography>
                  </Box>
        
                  <Box sx={{ display: "flex", justifyContent: "center",maxWidth:'220px', }}>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: 18, fontWeight: 400,  }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
                </Box>
              </Box>
              )
            })}
    </>
  );
};

export default Summary;
