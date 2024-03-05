import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Box, InputLabel } from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import {  useDispatch } from "react-redux";
import { addItem } from "../../../Redux/slices/formDataSlice/formDataSlice";
import { useSelector } from "react-redux";
import { usePDFContext } from "../../../customHooks/contentHooks";

const initialState = {
  name: "",
  title: "",
  image: "",
  email: "",
  phone: "",
  summary: "",
  url: "",
};

const BsicInfo = ({dataForUpdata}) => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const {setAccordionOpen,}=usePDFContext();
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      // Once the file is read, update the state with the data URL
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
  
    // Read the file as a data URL
    reader.readAsDataURL(file);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem({ key: 'basicInfo', item: formData }));
    setAccordionOpen((prev)=>({...prev,basicInfo:false}))

  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item mt={1} xs={12}>
              <Box>
                <InputLabel sx={{ fontWeight: "700" }}>Full Name:</InputLabel>
                <TextField
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: "40px",
                      paddingY: "5px",
                      background: "white",
                      borderRadius: "5px",
                    },
                  }}
                  fullWidth
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
            <Grid item mt={1} xs={12}>
              <Box>
                <InputLabel sx={{ fontWeight: "800", }}>Image:</InputLabel>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="inputimg"
                  placeholder="Choose an image"
                />
              </Box>
            </Grid>
            <Grid item mt={1} xs={6}>
              <Box>
                <InputLabel sx={{ fontWeight: "700" }}>Title:</InputLabel>
                <TextField
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: "40px",
                      paddingY: "5px",
                      background: "white",
                      px: 1,
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    },
                  }}
                  fullWidth
                  name="title"
                  placeholder="Enter your title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
            <Grid item mt={1} xs={6}>
              <Box>
                <InputLabel sx={{ fontWeight: "700" }}>GitHub Url:</InputLabel>
                <TextField
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: "40px",
                      paddingY: "5px",
                      background: "white",
                      px: 1,
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    },
                  }}
                  fullWidth
                  name="url"
                  placeholder="Enter your GitHub URL"
                  value={formData.url}
                  onChange={handleChange}
                />
              </Box>
            </Grid>

            <Grid item mt={1} xs={6}>
              <Box>
                <InputLabel sx={{ fontWeight: "700" }}>Email:</InputLabel>
                <TextField
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: "40px",
                      paddingY: "5px",
                      background: "white",
                      px: 1,
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    },
                  }}
                  fullWidth
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
            <Grid item mt={1} xs={6}>
              <Box>
                <InputLabel sx={{ fontWeight: "700" }}>Phone:</InputLabel>
                <TextField
                  variant="outlined"
                  InputProps={{
                    sx: {
                      height: "40px",
                      paddingY: "5px",
                      background: "white",
                      px: 1,
                      boxSizing: "border-box",
                      borderRadius: "5px",
                    },
                  }}
                  fullWidth
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
            <Grid item mt={1} xs={12}>
              <Box>
                <InputLabel sx={{ fontWeight: "700" }}>Summary:</InputLabel>
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
                  name="summary"
                  placeholder="Enter your summary"
                  value={formData.summary}
                  onChange={handleChange}
                  multiline
                  rows={3}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
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
    </form>
  );
};

export default BsicInfo;
