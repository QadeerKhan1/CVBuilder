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

const Skills2 = () => {
  const [data, setData] = useState([]);
  const reduxStore = useSelector((state) => state.dataForm.skills);
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
                  // justifyContent: "center",
                  gap: 5,
                  flexGrow: 0.13,
                }}
              > 
                <Typography
                  variant="h5"
                  sx={{ color: "black", fontWeight: "600" }}
                >
                  Skills
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap:4,
                  width: "100%",
                  pl:4 ,
                  pr: 4,
                  boxSizing: "border-box",
                  ml:9
                }}
              >
             {
        data.map((item, index) => {
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
                  {item.name}
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
        </Box>            </Box>
}

    </>
  );
};

export default Skills2;
