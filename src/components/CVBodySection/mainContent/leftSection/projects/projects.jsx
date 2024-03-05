import React,{useState,useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Projects() {
  const reduxStore = useSelector((state) => state.dataForm.projects);
  const [data, setData] = useState("");
  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
     
     
      {data.length > 0 &&  <Box sx={{ ml: 7 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", textTransform: "none" }}
        >
          Personal Projects
        </Typography>
      </Box>}
      <Box sx={{ display: "flex", flexDirection: "column",}}>
        {data && data.map((item,index) => {
          const {technology}=item
          return (
            <Box key={index}>
              <Box sx={{ display: "flex", flexDirection: "column",ml: 7 }}>
                <Box
                  component={"span"}
                  sx={{ fontWeight: "600", fontSize: "20px",lineHeight:2 }}
                >
                  {item.title}
                </Box>
                <Box>
                  <Box component={"span"} sx={{ fontWeight: "700" }}>
                    Technology:
                  </Box>
                  {technology && technology.map((item,ind)=><Box key={ind} component={'span'} ml={2}>{item}, </Box>)}
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", ml: 7 }}>
                <Box
                  component={"Box"}
                  sx={{ fontWeight: "600", fontSize: "18px" ,lineHeight:2}}
                >
                  Github: <Box
                  component={"component"}
                  sx={{ fontWeight: "200", fontSize: "18px" }}
                >{item.githubLink}</Box>
                </Box>
               
                  <Box component={"span"} sx={{ fontWeight: "700" }}>
                    Description: {item.description}
                  </Box>           
                   </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
