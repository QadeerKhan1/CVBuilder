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
import React, { useEffect, useState } from "react";
import aqkhan from "../../../assets/aqkhan.jpg";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import githb from "../../../assets/github.png";
import { useSelector } from "react-redux";

export default function DescriptionPart2() {
  const [data, setData] = useState([]);
  // Fetch data from Redux store
  const reduxStore = useSelector((state) => state.dataForm.basicInfo);

  // Update local state with data from Redux store
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
   
    <>
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
            <>
              <Box
              key={index}
                sx={{
                  height: 240,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: 3,
                }}
              >
                <Box sx={{ mb: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100, borderRadius: "5px", }}
                    image={image}
                    alt="AQ Khan"
                  />
                </Box>
                <Box>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ fontWeight: "700" }}
                  >
                    {name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "#087527", fontSize: 18, fontWeight: 700 }}
                    variant="subtitle1"
                  >
                    {title}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      { email &&  <IconButton>
                        <AttachEmailIcon />
                      </IconButton>}
                     
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <Typography sx={{ fontSize: 16 }} variant="body2">
                        {email}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {
                        phone && 
                        <IconButton>
                        <AddIcCallRoundedIcon />
                      </IconButton>
                      }
                      
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 16, textDecoration: "underline" }}
                        variant="body2"
                      >
                        {phone}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {
                        url && 
                        <IconButton>
                        <img
                          src={githb}
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </IconButton>
                      }
                     
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 16, textDecoration: "underline" }}
                        variant="body2"
                      >
                        {url}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          );
        })}
    </>
  );
}
