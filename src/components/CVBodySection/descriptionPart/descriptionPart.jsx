import { Grid, Box, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import aqkhan from '../../../assets/aqkhan.jpg'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import {  useSelector } from "react-redux";
import githb from '../../../assets/github.png'
const DescriptionPart1=()=>{
  const flexDirectionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const [data, setData] = useState([]);
  // Fetch data from Redux store
  const reduxStore = useSelector(state => state.dataForm.basicInfo);

  // Update local state with data from Redux store
  useEffect(() => {
    setData(reduxStore);        
  }, [reduxStore]);

  return (
    <>
    
    <Box sx={{py:3,}}>
      {Array.isArray(data) && data.map((item, index)=>{
        return(
          <>
          <Grid container spacing={2} borderBottom={3} key={index}>
        <Grid item sm={5}>
          <Box sx={{display:'flex',gap:4}}>
            <Box sx={{ ...flexDirectionStyle, justifyContent: "center" }}>
              <Box
                sx={{ width: "25px", height: "80px", background: "black" }}
              />
            </Box>
            <Box sx={{...flexDirectionStyle}}>
              <Box>
                <Typography variant="h4" sx={{fontWeight:'700',}}>{item.name}</Typography>
              </Box>
              <Box component={"span"} sx={{fontSize:'22px',fontWeight:'400'}}>{item.title}</Box>
              <Box mt={1}>
                <Typography variant="p">
                {item.summary}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={2}>
        <Box sx={{ width: '150px', height: '150px', borderRadius: '50%', overflow:'hidder' }}>
      <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} alt="" />
    </Box>
        </Grid>
        <Grid item sm={5}>
          <Box sx={{...flexDirectionStyle,pr:8,py:2,boxSizing:'border-box',gap:3}}>
            <Box sx={{width:'100%',display:'flex',justifyContent:'end',gap:2,boxSizing:'border-box'}}>
               <Box><Typography variant="p">{item.email}</Typography></Box>
               <Box component={'span'}><AttachEmailIcon sx={{transform:'scale(1.2)'}}/></Box>
            </Box>
            <Box sx={{width:'100%',display:'flex',justifyContent:'end',gap:2}}>
               <Box><Typography variant="p">{item.phone}</Typography></Box>
               <Box component={'span'}><PermContactCalendarRoundedIcon sx={{transform:'scale(1.2)'}}/></Box>
            </Box>
            <Box sx={{width:'100%',display:'flex',justifyContent:'end',gap:2}}>
               <Box><Typography variant="p">{item.url}</Typography></Box>
               <Box ><img src={githb} alt="" style={{width:'30px',height:'30px'}} /></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      </>
        )
      })
      }
     
      </Box>
    </>
  );
}
export default DescriptionPart1
