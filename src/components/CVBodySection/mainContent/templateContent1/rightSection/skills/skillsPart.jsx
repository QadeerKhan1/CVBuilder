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

export default function Skills() {
  const [data, setData] = useState([]);
  const reduxStore = useSelector((state) => state.dataForm.skills);
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
             {data.length>0 &&
        <Box>
          <Box
            sx={{ mt: 2, borderBottom: 3, borderColor: "#65a86b", width: 470 }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#65a86b", fontWeight: "600" }}
            >
              Skills
            </Typography>
          </Box>
          <Box sx={{ display: "flex",flexDirection:'column', }}>
          {
        data.map((item, index) => {
          return (
            <Box key={index} sx={{ display: "flex",alignItems:'center',justifyContent:'space-between',width:'70%', gap: 4 }}>
              <Box
                sx={{
                  fontSize: "19px",
                  borderRadius: "10px",
                  color: "black",
                  fontWeight: "600",
                  pt: "15px",
                }}
              >
                {item.name}
              </Box>
              <Box sx={{ display: "flex",justifyContent:'end', gap: 3 ,}}>
                <Rating
                  name="customized-10"
                  defaultValue={1}
                  max={5}
                  sx={{ color: "#65a86b", pt: "12px" }}
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
