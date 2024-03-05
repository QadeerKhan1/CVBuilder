import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function Education() {
  const flexDirectionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const reduxStore = useSelector((state) => state.dataForm.education);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
      {data.length > 0 && (
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
            Education
          </Typography>
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {data.map((item, index) => {
          const {
            institution,
            Title,
            Qualification,
            startDate,
            endDate,
            score,
          } = item;
          return (
            <>
              <Box key={index} sx={{ display: "flex", gap: 4 }}>
                <Box sx={{ ...flexDirectionStyle, justifyContent: "center" }}>
                  {/* <Box
                sx={{ width: "25px", height: "50px", background: "black" }}
              /> */}
                </Box>
                <Box sx={{ ...flexDirectionStyle }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "500" }}>
                      {Qualification}
                    </Typography>
                  </Box>

                  <Box
                    component={"span"}
                    sx={{ fontSize: "22px", fontWeight: "400" }}
                  >
                    {institution}
                  </Box>
                  <Box
                    mt={1}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box component={"span"}>
                      {startDate} - {endDate}
                    </Box>
                    <Box component={"span"}>{score}</Box>
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
