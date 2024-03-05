import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function WorkExperience() {
  const flexDirectionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const reduxStore = useSelector((state) => state.dataForm.workExperience);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
            {data.length>0 && 
      <Box
        sx={{
          ml: 4,
          mt: 2,
          borderBottom: 3,
          borderColor: "#65a86b",
          width: 470,
        }}
      >
        <Typography variant="h5" sx={{ color: "#65a86b", fontWeight: "600" }}>
          Work Experience
        </Typography>
      </Box>}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {data?.map((item, index) => {
            const {
              name,
              position,
              url,
              startDate,
              endDate,
              summary,
              highlights,
            } = item;
            return (
              <Box key={index} sx={{ display: "flex", gap: 4 ,ml:4}}>
                <Box sx={{ ...flexDirectionStyle }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "700" }}>
                      {name}
                    </Typography>
                  </Box>
                  <Box
                    component={"span"}
                    sx={{ fontSize: "22px", fontWeight: "400" }}
                  >
                    {position}
                  </Box>
                  <Box
                    component={"span"}
                    sx={{ fontSize: "22px", fontWeight: "400" }}
                  >
                    {summary}
                  </Box>
                  <Box
                    mt={1}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box component={"span"}>{startDate} </Box>
                    <Box component={"span"}>{endDate}</Box>
                  </Box>
                  <Box
                    component={"span"}
                    sx={{ fontSize: "22px", fontWeight: "400" }}
                  >
                    {url}
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
}
