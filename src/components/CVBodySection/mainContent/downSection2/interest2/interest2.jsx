import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import RectangleIcon from "@mui/icons-material/Rectangle";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#65a86b",
  },
  "& .MuiRating-iconHover": {
    color: "#65a86b",
  },
});
const Interest2 = () => {
  const [data, setData] = useState([]);

  const reduxStore = useSelector((state) => state.dataForm.interests);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
    {data.length>0 &&
      <Box
        sx={{
          display: "flex",
          borderBottom: 3,
          borderColor: "black",
          width: "auto",
          height: "auto",
          pb: 3,
          pt: 0.8,
          pl: 3,
          // justifyContent: "space-between",
          // gap: 6.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: 5,
            flexGrow: 0.05,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Interests
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          {
            data.map((item, index) => {
              return (
                <Box
                key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    pr: 4,
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexGrow: 0.89,
                      flexWrap: "wrap",
                      gap: 4,
                      pl: 1,
                      boxSizing: "border-box",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ color: "black", fontWeight: "600", fontSize: 19 }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>}
    </>
  );
};

export default Interest2;
