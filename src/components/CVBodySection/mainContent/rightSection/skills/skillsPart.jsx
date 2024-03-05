import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function Skills() {
  const [data, setData] = useState([]);
  const reduxStore = useSelector((state) => state.dataForm.skills);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  
  return (
    <>
      <Box>
        <Box>
          {data.length > 0 && <Typography variant="h4" sx={{ fontWeight: "700" }}>
            Skills
          </Typography>}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {data &&
              data.map((item, index) => {
                return (
                  <>
                    <Box
                    key={index}
                      sx={{
                        background: "#f2e8f4",
                        p: "8px 14px",
                        borderRadius: "10px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      {item.name}
                    </Box>
                    
                  </>
                );
              })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
