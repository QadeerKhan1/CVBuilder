import { Box, Typography } from "@mui/material";
import React,{useState,useEffect} from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { useSelector } from "react-redux";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#65a86b",
  },
  "& .MuiRating-iconHover": {
    color: "#65a86b",
  },
});

export default function Language() {
  const [data, setData] = useState([]);
  const reduxStore = useSelector((state) => state.dataForm.languages);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);

  return (
    <>
    {data.length>0 && 
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1.6 }}
      >
        <Box
          sx={{  borderBottom: 3, borderColor: "#65a86b", width: 470 }}
        >
          <Typography variant="h5" sx={{ color: "#65a86b", fontWeight: "600" }}>
            Languages
          </Typography>
        </Box>
        <Box sx={{ display: "flex",flexDirection:'column',gap:1 }}>
        {data.map((item, index) => {
              const { language, fluency } = item;
              return (
          <Box
          key={index}
            sx={{
              width:'70%',
              display: "flex",
              alignItems:'center',
              justifyContent:'space-between',
              gap: 3,
              pt: 0.5,
            }}
          >
            <Box component={"span"} fontWeight={"700"} sx={{fontSize:'19px'}}>
              {language}
            </Box>
          <Box sx={{ display: "flex" }}>
            <Rating
              name="customized-10"
              defaultValue={1}
              max={5}
              sx={{ color: "#65a86b"}}
              size="large"
            />
          </Box>
          </Box>
              )})}
        </Box>
      </Box>
}
    </>
  );
}
