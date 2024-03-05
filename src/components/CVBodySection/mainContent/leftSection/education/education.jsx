import { Box, Typography } from "@mui/material";
import React, { useState ,useEffect} from "react";
import {  useSelector } from "react-redux";
export default function Education() {
  const reduxStore = useSelector(state => state.dataForm.education);
  const [data,setData]=useState('')
  useEffect(() => {
    setData(reduxStore);        
  }, [reduxStore]);
  const flexDirectionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
                  {data.length ? <Box sx={{ml:7}}>
            <Typography variant="h4" sx={{ fontWeight: "700" }}>
              Education
            </Typography>
          </Box>:''}
        <Box  sx={{display:'flex',flexDirection:'column',gap:2}}>
          {data && data.map((item,index)=>{
            return(
              <Box key={index} sx={{ display: "flex", gap: 4 }}>
            <Box sx={{ ...flexDirectionStyle, justifyContent: "center" }}>
              <Box
                sx={{ width: "25px", height: "50px", background: "black" }}
              />
            </Box>
            <Box sx={{ ...flexDirectionStyle }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "500" }}>
                  {item.institution}
                </Typography>
              </Box>
              <Box
                component={"span"}
                sx={{ fontSize: "22px", fontWeight: "400" }}
              >
                 {item.Qualification}
              </Box>
              <Box mt={1} sx={{display:'flex',justifyContent:'space-between'}}>
                <Box component={'span'}>{item.startDate}</Box>
                <Box component={'span'}>{item.endDate}</Box>
              </Box>
              <Box component={'span'} fontWeight={'700'}>{item.score}</Box>
            </Box>
          </Box>
            )
          })}
          
        </Box>
      
    </>
  );
}
