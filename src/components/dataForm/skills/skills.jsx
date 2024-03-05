import React, { useState ,useEffect} from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  InputLabel,
  Chip,
} from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import { useDispatch } from "react-redux";
import { usePDFContext } from "../../../customHooks/contentHooks";
import { addItem,updateItem } from "../../../Redux/slices/formDataSlice/formDataSlice";
const initialSkillState = {
  name: "",
};
const SkillsForm = ({dataForUpdate,setDataForUpdate}) => {
  const [skills, setSkills] = useState(initialSkillState);
  const {setAccordionOpen,}=usePDFContext();
  const dispatch=useDispatch()
  const {index,name,data}=dataForUpdate;

  useEffect(()=>{
    if(dataForUpdate){
     const {name}=data
     setSkills({name})
    }
   },[dataForUpdate])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSkills((prev)=>({...prev,[name]:value}));
  };

  const handleAddSkill = () => {
     setSkills([...skills, initialSkillState]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(data){
      console.log('update',index);
   dispatch(updateItem({ key:'skills', index: index, data: skills }));
   setDataForUpdate('')
 }
 else{
   console.log('add');
   dispatch(addItem({ key: 'skills', item: skills }));
  }
  setAccordionOpen((prev)=>({...prev,skills:false}))
    setSkills(initialSkillState);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%", // Ensure the Box occupies full width
            }}
            className="workData"
            
          >
            <Grid container spacing={3} sx={{width:'100%'}} >
              <Grid item xs={12}>
                <Box>
                  <InputLabel sx={{ fontWeight: "700" }}>Name:</InputLabel>
                  <TextField
                    variant="outlined"
                    required
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
                    name="name"
                    placeholder="Enter skill name"
                    value={skills.name}
                    onChange={(event) => handleChange(event)}
                  />
                </Box>
              </Grid>

            </Grid>
          </Box>
        <Grid item xs={12}>
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
            <Button
              variant="standard"
              sx={{ color: "black", textTransform: "none" }}
              onClick={handleAddSkill}
              startIcon={<AddCircleTwoToneIcon />}
            >
              Add
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
};

export default SkillsForm;
