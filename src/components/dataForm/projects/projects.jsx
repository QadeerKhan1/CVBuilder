import React, { useState, useEffect, useMemo } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  InputLabel,
} from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { useDispatch } from "react-redux";
import {
  addItem,
  updateItem,
} from "../../../Redux/slices/formDataSlice/formDataSlice";
import { usePDFContext } from "../../../customHooks/contentHooks";

const initialProjectState = {
  technology: [],
  title: "",
  overview: "",
  description: "",
  githubLink: "",
};

const Projects = ({ dataForUpdate, setDataForUpdate }) => {
  
  
    const [projects, setProjects] = useState(initialProjectState);
  const [singleTech, setSingleTech] = useState('');
  const { index, name, data } = dataForUpdate;
  const {setAccordionOpen,}=usePDFContext();

  useEffect(() => {
    if (dataForUpdate) {
      const { technology, title, overview, description, githubLink } = data;
      setProjects({ technology, title, overview, description, githubLink });
      setSingleTech(technology);
    }
  }, [data]);
  console.log('unNecessary call to project',data);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjects((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTechState = (event, index) => {
    const { value } = event.target;
    const updatedProjects = { ...projects };
    if (dataForUpdate) {
      const updatedItems = [...singleTech];
      updatedItems[index] = value;
      setSingleTech(updatedItems);
    } else {
      setSingleTech(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data) {
      dispatch(
        updateItem({ key: "projects", index: index, data: projects })
      );
      setDataForUpdate("");
    } else {
      dispatch(addItem({ key: "projects", item: projects }));
    }
    setSingleTech("");
    setAccordionOpen((prev) => ({ ...prev, projects: false }));
    setProjects(initialProjectState);
    setDataForUpdate("");
  };

  const handleAddTechnology = () => {
    if (data) {
      setProjects((pre) => ({ ...pre, technology: singleTech }));
    } else {
      
        const updateTechnology = Array.isArray(singleTech)
          ? singleTech
          : [singleTech];
        if (projects.technology) {
          setProjects((prevProjects) => ({
            ...prevProjects,
            technology: [...prevProjects.technology, ...updateTechnology],
          }));
        } else {
          setProjects((prevState) => ({
            ...prevState,
            technology: [...updateTechnology],
          }));
        
      }
      setSingleTech(" ");
    }
  };

    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ marginBottom: "10px" }}>
                <InputLabel sx={{ fontWeight: "700" }}>Title:</InputLabel>
                <TextField
                  required
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: "35px",
                      paddingY: "5px",
                      background: "white",
                      px: 1,
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    },
                  }}
                  fullWidth
                  name="title"
                  placeholder="Enter project title"
                  value={projects.title}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    marginBottom: "10px",
                    width: "100%",
                    display: "flex",
                    alignItems: "end",
                    gap: 2,
                  }}
                >
                  <Box>
                    {!dataForUpdate ? (
                      <>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "space-between",
                            gap: 2,
                          }}
                        >
                          <Box width={"70%"}>
                            <InputLabel sx={{ fontWeight: "700" }}>
                              Technology
                            </InputLabel>
                            <TextField
                              required
                              variant="outlined"
                              InputProps={{
                                sx: {
                                  height: "35px",
                                  paddingY: "5px",
                                  background: "white",
                                  px: 1,
                                  boxSizing: "border-box",
                                  borderRadius: "5px",
                                },
                              }}
                              fullWidth
                              name="singleTech"
                              placeholder="Enter Technologies"
                              value={singleTech}
                              onChange={(event) => handleTechState(event)}
                            />
                          </Box>
                          <Box>
                            <Button
                              variant="standard"
                              onClick={handleAddTechnology}
                              sx={{
                                color: "black",
                                textTransform: "none",
                                fontWeight: "700",
                                fontSize: "16px",
                              }}
                              startIcon={<AddCircleTwoToneIcon />}
                            >
                              Add
                            </Button>
                          </Box>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 2,
                            width: "100%",
                          }}
                        >
                          {projects.technology?.map((item, ind) => {
                              return (
                                <>
                                  <Box width={"100%"}>
                                    <InputLabel sx={{ fontWeight: "700" }}>
                                      Technology {ind + 1}
                                    </InputLabel>
                                    <TextField
                                      required
                                      variant="outlined"
                                      InputProps={{
                                        sx: {
                                          height: "35px",
                                          paddingY: "5px",
                                          background: "white",
                                          px: 1,
                                          boxSizing: "border-box",
                                          borderRadius: "5px",
                                        },
                                      }}
                                      fullWidth
                                      name={`technology-${ind}`}
                                      placeholder="Enter Technologies"
                                      value={singleTech[ind]}
                                      onChange={(event) =>
                                        handleTechState(event, ind)
                                      }
                                    />
                                  </Box>
                                </>
                              );
                            })}
                        </Box>
                        <Button
                          variant="outlined"
                          fullWidth
                          onClick={handleAddTechnology}
                          sx={{
                            mt: 2,
                            color: "black",
                            textTransform: "none",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                          startIcon={
                            <UpgradeIcon sx={{ transform: "scale(1.6)" }} />
                          }
                        >
                          Update
                        </Button>
                      </>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ marginBottom: "10px" }}>
                <InputLabel sx={{ fontWeight: "700" }}>
                  GitHub Link:
                </InputLabel>
                <TextField
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: "35px",
                      paddingY: "5px",
                      background: "white",
                      px: 1,
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    },
                  }}
                  fullWidth
                  name="githubLink"
                  placeholder="Enter GitHub link"
                  value={projects.githubLink}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ marginBottom: "10px" }}>
                <InputLabel sx={{ fontWeight: "700" }}>
                  Description:
                </InputLabel>
                <TextField
                  variant="outlined"
                  InputProps={{
                    sx: {
                      paddingY: "5px",
                      background: "white",
                      px: 1,
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    },
                  }}
                  fullWidth
                  name="description"
                  placeholder="Enter project description"
                  value={projects.description}
                  onChange={(event) => handleChange(event)}
                  multiline
                  rows={4}
                />
              </Box>
            </Grid>
        
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
              width: "100%",
            }}
          >
            <Box>
              <Button
                type="submit"
                variant="filled"
                sx={{
                  background: "#005149",
                  color: "#f2e8f4",
                  borderRadius: "5px",
                  fontWeight: "600",
                  px: 4,
                  ":hover": { background: "#005149" },
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
      </form>
    );

};

export default Projects;
