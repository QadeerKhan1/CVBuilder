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
import { addItem ,updateItem} from "../../../Redux/slices/formDataSlice/formDataSlice";
import { usePDFContext } from "../../../customHooks/contentHooks";
const initialInterestState = {
  name: "",
};

const InterestsForm = ({dataForUpdate,setDataForUpdate}) => {
  const [interests, setInterests] = useState(initialInterestState);
  const {setAccordionOpen,}=usePDFContext();
  const dispatch=useDispatch()
  const {index,name,data}=dataForUpdate;

  const handleChange = ( event) => {
    const { name, value } = event.target;
  
    setInterests((prev=>({...prev,[name]:value})));
  };

  const handleAddInterest = () => {
    // setInterests([...interests, initialInterestState]);
  };
  useEffect(()=>{
    if(dataForUpdate){
     const {name}=data
     setInterests({name})
    }
   },[dataForUpdate])


  const handleSubmit = (event) => {
    event.preventDefault();
    if(data){
         console.log('update',index);
      dispatch(updateItem({ key:'interests', index: index, data: interests }));
      setDataForUpdate('')
    }
    else{
      console.log('add');
      dispatch(addItem({ key: 'interests', item: interests }));
    }
    setAccordionOpen((prev)=>({...prev,interests:false}))

    setInterests(initialInterestState);
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
            className="interestData"
            
          >
            <Grid container spacing={2} >
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <InputLabel sx={{ fontWeight: "700" }}>Name:</InputLabel>
                  <TextField
                  required
                    InputProps={{
                      sx: {
                        height: "40px",
                        paddingY: "5px",
                        background: "white",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                      },
                    }}
                    fullWidth
                    name="name"
                    placeholder="Enter interest name"
                    value={interests.name}
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
              sx={{ color: "black", textTransform: "none" }}
              onClick={handleAddInterest}
              startIcon={<AddCircleTwoToneIcon />}
            >
              Add
            </Button>
          </Box>
          </form>

    </>
  );
};

export default InterestsForm;
