import React,{useState,useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Certification() {
  const flexDirectionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const reduxStore = useSelector((state) => state.dataForm.certification);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
     {data.length>0 &&
    <Box>
      <Box sx={{ mt: 2, borderBottom: 3, borderColor: "#65a86b", width: 470 }}>
        <Typography variant="h5" sx={{ color: "#65a86b", fontWeight: "600" }}>
          Certification
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column",gap:2, width: "100%" }} >
          {data &&
          data.map((item, index) => {
            const { name, startDate, endDate, issuer } = item;
            return (
        <Box key={index} sx={{ ...flexDirectionStyle, }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              {name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <Box component={"span"}>{startDate} - {endDate}</Box>
            <Box component={"span"}>{issuer}</Box>
          </Box>
          
        </Box>
            )})}
      </Box>
      </Box>
}
    </>
  );
}
