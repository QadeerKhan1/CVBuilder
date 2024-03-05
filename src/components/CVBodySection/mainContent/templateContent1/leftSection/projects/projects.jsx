import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { GitHub } from "@mui/icons-material";
export default function Projects() {
  const reduxStore = useSelector((state) => state.dataForm.projects);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(reduxStore);
  }, [reduxStore]);
  return (
    <>
      {data.length > 0 && (
        <Box>
          <Box
            sx={{
              ml: 4,
              mt: 2,
              borderBottom: 3,
              borderColor: "#65a86b",
              width: 470,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#65a86b", fontWeight: "600" }}
            >
              Projects
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {data &&
              data.map((item, index) => {
                const { technology, title, overview, description, githubLink } =
                  item;
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.7,
                      ml: 4,
                    }}
                  >
                    <Box
                      component={"span"}
                      sx={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      {title}
                    </Box>
                    <Box>
                      <Box component={"span"} sx={{ fontWeight: "700" }}>
                        Technology:
                      </Box>{" "}
                      {technology &&
                        technology.map((item, ind) => (
                          <Box component={"span"} sx={{ fontWeight: "500" }}>
                            {item},
                          </Box>
                        ))}
                    </Box>
                    <Box>
                      <Box>
                        <Box component={"span"} sx={{ fontWeight: "700" }}>
                          Url:
                        </Box>{" "}
                        {githubLink}
                      </Box>
                      <Box component={"span"} sx={{ fontWeight: "700" }}>
                        Description:
                      </Box>{" "}
                      {description}
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Box>
      )}
    </>
  );
}
