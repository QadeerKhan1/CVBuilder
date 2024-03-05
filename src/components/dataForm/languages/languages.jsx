import React, { useState,useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  InputLabel,
} from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem,updateItem } from "../../../Redux/slices/formDataSlice/formDataSlice";
import { usePDFContext } from "../../../customHooks/contentHooks";

const initialLanguageState = {
  language: "",
  fluency: "",
};

const LanguagesForm = ({dataForUpdate,setDataForUpdate}) => {
  const {setAccordionOpen,}=usePDFContext();
  const [languages, setLanguages] = useState(initialLanguageState);
  const dispatch=useDispatch()
  const {index,name,data}=dataForUpdate;

  useEffect(()=>{
    if(dataForUpdate){
     const {language,fluency}=data
     setLanguages({language,fluency})
    }
   },[dataForUpdate])

  const handleChange = ( event) => {
    const { name, value } = event.target;
    setLanguages((prev=>({...prev,[name]:value})))
  };

  const handleAddLanguage = () => {
    setLanguages([...languages, initialLanguageState]);
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice( 1);
    setLanguages(updatedLanguages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(data){
      console.log('update',index);
   dispatch(updateItem({ key:'languages', index: index, data: languages }));
   setDataForUpdate('')
 }
 else{
   console.log('add');
   dispatch(addItem({ key: 'languages', item: languages }));
  }
  setAccordionOpen((prev)=>({...prev,languages:false}))
    setLanguages(initialLanguageState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
            className="languageData"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Language </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <TextField
                     variant="outlined"
                    InputProps={{
                      sx: {
                        height: "35px",
                        paddingY: "5px",
                        boxSizing: "border-box",
                        background:'white',
                        borderRadius: "5px",
                      },
                      disableUnderline: true,
                    }}
                    fullWidth
                    name="language"
                    placeholder="Enter language"
                    value={languages.language}
                    onChange={(event) => handleChange( event)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <InputLabel sx={{ fontWeight: "700" }}>Fluency:</InputLabel>
                  <TextField
                     variant="outlined"
                    InputProps={{
                      sx: {
                        height: "35px",
                        paddingY: "5px",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                        background:'white'
                      },
                      disableUnderline: true,
                    }}
                    fullWidth
                    name="fluency"
                    placeholder="Enter fluency"
                    value={languages.fluency}
                    onChange={(event) => handleChange( event)}
                  />
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
            <Button
               variant="standard"
                    InputProps={{
                      sx: {
                        height: "35px",
                        paddingY: "5px",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                      },
                      disableUnderline: true,
                    }}
              
              startIcon={<AddCircleTwoToneIcon />}
            >
              Add
            </Button>
          </Box>
          </form>

    </>
  );
};

export default LanguagesForm;
