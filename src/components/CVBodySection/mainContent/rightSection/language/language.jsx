import { Box ,Typography} from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";

export default function Language() {
  const [data, setData] = useState([]);
  const reduxStore = useSelector((state) => state.dataForm.languages);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:3}}>
    {data.length>0 && <Box>
    <Typography variant="h4" sx={{ fontWeight: "700" }}>
    Language
  </Typography>
</Box>}
{data && data.map((item,index)=>(
  <Box key={index} sx={{display:'flex',justifyContent:'space-between',width:'40%'}}>
  <Box component={'span'} fontWeight={'700'}>{item.language}</Box>
  <Box component={'span'} fontWeight={'700'}>{item.fluency}</Box>
</Box>
))}
    </Box>
    </>
  )
}
