import React, { useState ,useEffect } from "react";
import { Grid, TextField, Box, InputLabel, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { usePDFContext } from "../../../customHooks/contentHooks";
import { useDispatch } from "react-redux";
import { addItem ,updateItem} from "../../../Redux/slices/formDataSlice/formDataSlice";
const EducationForm = ({dataForUpdate,setDataForUpdate}) => {
  const [educationFormData, setEducationFormData] = useState([]);
  const {setAccordionOpen,}=usePDFContext();
  const {index,name,data}=dataForUpdate;
  console.log('unNecessary call to Education',data);

  const [inputFields, setInputFields] = useState(
    {
      institution: "",
      Title: "",
      Qualification: "",
      startDate: "",
      endDate: "",
      score: ""
    }
  );
  useEffect(()=>{
   if(dataForUpdate){
    const {institution,Title,Qualification,startDate,endDate,score}=data
    setInputFields({institution,Title,Qualification,startDate,endDate,score})
   }
  },[dataForUpdate])
  const dispatch=useDispatch()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addNewField = () => {
    // setInputFields([...inputFields, { ...inputFields[0] }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if(data){
         console.log('update',index);
      dispatch(updateItem({ key:'education', index: index, data: inputFields }));
      setDataForUpdate('')
    }
    else{
      console.log('add');
      dispatch(addItem({ key: 'education', item: inputFields }));
    }
    setAccordionOpen((prev)=>({...prev,education:false}))
    setInputFields( {
      institution: "",
      Title: "",
      Qualification: "",
      startDate: "",
      endDate: "",
      score: ""
    })
    
  };

  return (
    <>
    
          <div className="educationData" >
     <form onSubmit={handleSubmit}>
             
     <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box>
                <InputLabel sx={{fontWeight:'700'}}>Institution:</InputLabel>
                <TextField
                
                  fullWidth variant="outlined"
                  InputProps={{
                    sx: { height: "35px",paddingY:'5px', background: "white",px:1,boxSizing:'border-box',borderRadius:'5px' ,},
                   
                  }}
                  name="institution"
                  placeholder="Enter institution"
                  value={inputFields.institution}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <InputLabel sx={{fontWeight:'700'}}>Title:</InputLabel>
                <TextField
                
                  fullWidth variant="outlined"
                  InputProps={{
                    sx: { height: "35px",paddingY:'5px', background: "white",px:1,boxSizing:'border-box',borderRadius:'5px' ,},
                   
                  }}
                  name="Title"
                  placeholder="Enter your title"
                  value={inputFields.Title}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <InputLabel sx={{fontWeight:'700'}}>Qualification:</InputLabel>
                <TextField
                
                  fullWidth variant="outlined"
                  InputProps={{
                    sx: { height: "35px",paddingY:'5px', background: "white",px:1,boxSizing:'border-box',borderRadius:'5px' ,},
                   
                  }}
                  name="Qualification"
                  placeholder="Enter qualification"
                  value={inputFields.Qualification}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <InputLabel sx={{fontWeight:'700'}}>Start Date:</InputLabel>
                <TextField
                  
                  fullWidth variant="outlined"
                  InputProps={{
                    sx: { height: "35px",paddingY:'5px', background: "white",px:1,boxSizing:'border-box',borderRadius:'5px' ,},
                   
                  }}
                  type="date"
                  name="startDate"
                  value={inputFields.startDate}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <InputLabel sx={{fontWeight:'700'}}>End Date:</InputLabel>
                <TextField
                
                  fullWidth variant="outlined"
                  InputProps={{
                    sx: { height: "35px",paddingY:'5px', background: "white",px:1,boxSizing:'border-box',borderRadius:'5px' ,},
                   
                  }}
                  type="date"
                  name="endDate"
                  value={inputFields.endDate}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <InputLabel sx={{fontWeight:'700'}}>Score:</InputLabel>
                <TextField
                
                  fullWidth variant="outlined"
                  InputProps={{
                    sx: { height: "35px",paddingY:'5px', background: "white",px:1,boxSizing:'border-box',borderRadius:'5px' ,},
                   
                  }}
                  name="score"
                  placeholder="Enter score"
                  value={inputFields.score}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            </Grid>
    
     
    <Box sx={{display:'flex',justifyContent:'space-between',mt:1}}>
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
    <Button variant="standard" sx={{color:'black',textTransform:'none'}} onClick={addNewField} startIcon={<AddCircleTwoToneIcon />}>
  Add
</Button>
    </Box>
    </form>
          </div>
    </>
  );
};

export default EducationForm;
