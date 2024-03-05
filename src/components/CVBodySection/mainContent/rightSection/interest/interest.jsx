import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function Interest() {
  const [data, setData] = useState([]);

  // Fetch data from Redux store
  const reduxStore = useSelector((state) => state.dataForm.interests);

  // Update local state with data from Redux store
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
      <Box>
        <Box>
            {data.length > 0 &&  <Typography variant="h4" sx={{ fontWeight: "700" }}>
            Interest
          </Typography>}
          
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {data?.map((item, index) => {
  return (
    <Box
      key={index} // <-- Add a unique key prop here
      sx={{
        p: "8px 14px",
        border: 'solid 2px black',
        borderRadius: "10px",
        color: "black",
        fontWeight: "600",
      }}
    >
      {item.name}
    </Box>
  );
})}

          </Box>
        </Box>
      </Box>
    </>
  );
}
