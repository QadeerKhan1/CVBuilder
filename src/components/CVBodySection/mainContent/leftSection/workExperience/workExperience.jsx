import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function WorkExperience() {
  const reduxStore = useSelector((state) => state.dataForm.workExperience);
  const [data, setData] = useState("");
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  const flexDirectionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      {data.length > 0 && <Box sx={{ ml: 7 }}>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Work Experience
        </Typography>
      </Box>}
      <Box
        
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {data &&
          data.map((item, index) => {
            return (
              <>
                <Box sx={{ display: "flex", gap: 4 }}>
                  <Box sx={{ ...flexDirectionStyle, justifyContent: "center" }}>
                    <Box
                      sx={{
                        width: "25px",
                        height: "40px",
                        background: "black",
                      }}
                    />
                  </Box>
                  <Box sx={{ ...flexDirectionStyle }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "700" }}>
                        {item.name}
                      </Typography>
                    </Box>
                    <Box
                      component={"span"}
                      sx={{ fontSize: "22px", fontWeight: "400" }}
                    >
                      Position: {item.position}
                    </Box>
                    <Box
                      component={"span"}
                      sx={{ fontSize: "22px", fontWeight: "400" }}
                    >
                      Url: {item.url}
                    </Box>
                    <Box
                      mt={1}
                      sx={{ display: "flex", justifyContent: "space-between",width:'100%' }}
                    >
                      <Box component={"span"}>{item.startDate}</Box>
                      <Box component={"span"}>{item.endDate}</Box>
                    </Box>
                    <Box >
                        <Box component={'span'}>{item.summary}</Box>
                    </Box>
                    <Box>
                      <ul>
                        {item.highlights.map((item,index)=>(<li key={index}>{item}</li>))}
                      </ul>
                    </Box>
                  </Box>
                </Box>
              </>
            );
          })}
      </Box>
    </>
  );
}
