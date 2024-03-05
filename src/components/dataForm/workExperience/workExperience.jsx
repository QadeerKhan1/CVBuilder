import React, { useState, useEffect } from "react";
import { Grid, TextField, Box, InputLabel, Button, Input } from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useDispatch } from "react-redux";
import {
  addItem,
  updateItem,
} from "../../../Redux/slices/formDataSlice/formDataSlice";
import { usePDFContext } from "../../../customHooks/contentHooks";
import { Highlight } from "@mui/icons-material";
const initialState={
  name: "",
    position: "",
    url: "",
    startDate: "",
    endDate: "",
    summary: "",
    highlights: [],
}
const WorkExperienceForm = ({ dataForUpdate, setDataForUpdate }) => {
  const { setAccordionOpen } = usePDFContext();
  const { index, name, data } = dataForUpdate;
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState(initialState);
  const [highlightsArray,setHighlightArray]=useState([])

  useEffect(() => {
    if (dataForUpdate) {
      const { name, position, url, startDate, endDate, summary, highlights } =
        data;
      setInputFields({
        name,
        position,
        url,
        startDate,
        endDate,
        summary,
        highlights,
      });
      setHighlightArray(highlights)

    }
  }, [dataForUpdate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const hanldeHighlightArray=(event,index)=>{
    const { name, value } = event.target;
        if(data){
          const updatedItems = [...highlightsArray];
      updatedItems[index] = value;
      setHighlightArray(updatedItems);
        }else{
          setHighlightArray(value)
        }

  }

  const addNewField = () => {
    setInputFields(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data) {
      console.log("update", index);
      dispatch(
        updateItem({ key: "workExperience", index: index, data: inputFields })
      );
      setDataForUpdate("");
    } else {
      console.log("add");
      dispatch(addItem({ key: "workExperience", item: inputFields }));
    }
    setHighlightArray('')
    setAccordionOpen((prev) => ({ ...prev, workExperience: false }));
    setInputFields(initialState);
  };

  const handlehighlights = () => {
    if (data) {
      setInputFields((prevState) => ({
        ...prevState,
        highlights: highlightsArray,
      }));
    } else {
      console.log('new work exp ', highlightsArray);
      const updatedHighlights = Array.isArray(highlightsArray) ? highlightsArray : [highlightsArray];
             if(inputFields.highlights){
              setInputFields((prevState) => ({
                ...prevState,
                highlights: [...prevState.highlights, ...updatedHighlights],
              }));
             }else{
              setInputFields((prevState)=>({
                ...prevState,
                highlights: [...updatedHighlights],
              }));
             }
      
    }
    setHighlightArray('');
  };
    

  

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <InputLabel sx={{ fontWeight: "700" }}>Company Name:</InputLabel>
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
                placeholder="Enter company name"
                value={inputFields.name}
                onChange={(event) => handleChange(event)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <InputLabel sx={{ fontWeight: "700" }}>Position:</InputLabel>
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
                name="position"
                placeholder="Enter your position"
                value={inputFields.position}
                onChange={(event) => handleChange(event)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <InputLabel sx={{ fontWeight: "700" }}>URL:</InputLabel>
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
                name="url"
                placeholder="Enter company URL"
                value={inputFields.url}
                onChange={(event) => handleChange(event)}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <InputLabel sx={{ fontWeight: "700" }}>Start Date:</InputLabel>
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
                type="date"
                name="startDate"
                value={inputFields.startDate}
                onChange={(event) => handleChange(event)}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <InputLabel sx={{ fontWeight: "700" }}>End Date:</InputLabel>
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
                type="date"
                name="endDate"
                value={inputFields.endDate}
                onChange={(event) => handleChange(event)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <InputLabel sx={{ fontWeight: "700" }}>Summary:</InputLabel>
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
                name="summary"
                placeholder="Enter job summary"
                value={inputFields.summary}
                onChange={(event) => handleChange(event)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>

            <Box sx={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:2,pr:1,boxSizing:'border-box'}}>
            {!dataForUpdate ?  <Box sx={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:2,pr:1,boxSizing:'border-box'}}>
                <Box width={'70%'}>
                <InputLabel sx={{ fontWeight: "700" }}>Highlights:</InputLabel>
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
                  name="highlights"
                  placeholder="Enter job highlights"
                  value={highlightsArray}
                  onChange={(event) => hanldeHighlightArray(event)}
                />
                </Box>
                <Box>
                <Button
                  variant="variant"
                  sx={{ color: "black", textTransform: "none" }}
                  onClick={handlehighlights}
                  startIcon={<AddCircleTwoToneIcon />}
                >
                  Add
                </Button>
              </Box>
              </Box>:<Box width={'100%'}>
                 {inputFields.highlights?.map((item,index)=>( <Box key={index} mt={1} width={'100%'}>
                <InputLabel sx={{ fontWeight: "700" }}>Highlight{index+1}:</InputLabel>
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
                  name={`highlights-${index}`}
                  placeholder="Enter job highlights"
                  value={highlightsArray[index]}
                  onChange={(event) => hanldeHighlightArray(event,index)}
                />

              </Box>))}
              <Box width={'100%'} mt={1}>
                <Button
                fullWidth
                  variant="outlined"
                  sx={{ color: "black", textTransform: "none" }}
                  onClick={handlehighlights}
                  startIcon={<UpgradeIcon sx={{transform:'scale(1.6)'}}/>}
                >
                  Update
                </Button>
              </Box>
                </Box>}

             
              
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
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

export default WorkExperienceForm;
