import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Certification() {
  const reduxStore = useSelector((state) => state.dataForm.certification);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  const flexDirectionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      {data.length > 0 && (
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            Certification
          </Typography>
        </Box>
      )}
      <Box
        
        sx={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <Box sx={{ ...flexDirectionStyle }}>
            {data?.map((item, index) => {
              return (
                <>
                  <Box sx={{ ...flexDirectionStyle }} key={index}>
                    <Box
                      mt={1}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: "700" }}>
                          {item.name}
                        </Typography>
                      </Box>
                      <Box component={"span"}>
                        ( {item.startDate} - {item.endDate} ){" "}
                      </Box>
                    </Box>

                    <Box
                      component={"span"}
                      fontWeight={"600"}
                      fontSize={"18px"}
                    >
                      {item.issuer}
                    </Box>
                  </Box>
                </>
              );
            })}
        </Box>
      </Box>
    </>
  );
}
