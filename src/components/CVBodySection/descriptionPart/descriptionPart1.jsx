import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import React,{useEffect,useState} from "react";
import aqkhan from "../../../assets/aqkhan.jpg";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import githb from "../../../assets/github.png";
import { useSelector } from "react-redux";
export default function DescriptionPart1() {
  const [data, setData] = useState([]);
  // Fetch data from Redux store
  const reduxStore = useSelector(state => state.dataForm.basicInfo);

  // Update local state with data from Redux store
  useEffect(() => {
    setData(reduxStore);        
  }, [reduxStore]);
  return (
    <>
    <Box>
    {Array.isArray(data) &&
      data.map((item, index) => {
        const { name,
          title,
          image,
          email,
          phone,
          summary,
          url,}=item;
        return (
      <Card key={index} sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", bgcolor: '#bfe0d8' }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", flex: "1 0 auto", ml: 2}}>
            <Typography component="div" variant="h5" sx={{ fontWeight: "700" }}>
              {name}
            </Typography>
            <Typography sx={{ mb:2, color: "#087527", fontSize:18 ,fontWeight:700 }} variant="subtitle1" >
              {title}
            </Typography>
            <Typography variant="body1" sx={{fontSize: 18, fontWeight:600}}>
              {summary}
            </Typography>             
          </CardContent>
          <CardMedia
            component="img"
            sx={{ mr:4, py: 3, width: 120, height: 120,}}
            image={image}
            alt="AQ Khan"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 1,bgcolor:"#97d1c3",pl:3}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <AttachEmailIcon />
            </IconButton>
            <Typography sx={{fontSize: 16}} variant="body2">{email}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <AddIcCallRoundedIcon />
            </IconButton>
            <Typography sx={{fontSize: 16, textDecoration: "underline"}} variant="body2">{phone}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <img
                src={githb}
                alt=""
                style={{ width: "30px", height: "30px" }}
              />
            </IconButton>
            <Typography sx={{fontSize: 16, textDecoration: "underline"}} variant="body2">{url}</Typography>
          </Box>
        </Box>
      </Card>
        )})}
            </Box>

        </>
  );
}
