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
const Languages2 = () => {
  const [data, setData] = useState([]);
  const reduxStore = useSelector((state) => state.dataForm.languages);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);

  return (
    <>
      {data.length>0 && (
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
              // justifyContent: "center",
              gap: 5,
              flexGrow: 0.05,
            }}
          >
            <Typography variant="h5" sx={{ color: "black", fontWeight: "600" }}>
              Languages
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              width: "100%",
              pr: 4,
              boxSizing: "border-box",
              flexGrow: 0.89,
              pl: 5,
            }}
          >
            {data.map((item, index) => {
              const { language, fluency } = item;
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    // justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "black", fontWeight: "500", fontSize: 19 }}
                  >
                    {language}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<CircleIcon fontSize="small" />}
                      emptyIcon={<CircleIcon fontSize="small" />}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Languages2;
