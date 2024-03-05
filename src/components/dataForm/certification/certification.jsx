import React, { useState ,useEffect,useMemo} from "react";
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
import { usePDFContext } from "../../../customHooks/contentHooks";
import { addItem ,updateItem} from "../../../Redux/slices/formDataSlice/formDataSlice";
const initialCertificateState = {
  name: "",
  startDate: "",
  endDate: "",
  issuer: "",
  
};

const CertificatesForm = ({dataForUpdate,setDataForUpdate}) => {
  const dispatch=useDispatch()
  const {setAccordionOpen,}=usePDFContext();
  const [certificates, setCertificates] = useState(initialCertificateState);
  const {index,name,data}=dataForUpdate;
  console.log('unNecessary call to certification',data);

  useEffect(()=>{
    if(dataForUpdate){
     const {name,startDate,endDate,issuer}=data
     setCertificates({name,startDate,endDate,issuer})
    }
   },[dataForUpdate])

  const handleChange = ( event) => {
    const { name, value } = event.target;
    
    setCertificates((prev)=>({...prev,[name]:value}));
  };

  const handleAddCertificate = () => {
    // setCertificates([...certificates, initialCertificateState]);
  };

  const handleRemoveCertificate = (index) => {
    // const upstartDatedCertificates = [...certificates];
    // upstartDatedCertificates.splice( 1);
    // setCertificates(upstartDatedCertificates);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(data){
      console.log('update',index);
   dispatch(updateItem({ key:'certification', index: index, data: certificates }));
   setDataForUpdate('')
 }
 else{
   console.log('add');
   dispatch(addItem({ key: 'certification', item: certificates }));
  }
  setAccordionOpen((prev)=>({...prev,certification:false}))
    setCertificates(initialCertificateState);
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
            className="certificateData"
            
          >
            <Grid container spacing={3} >
              <Grid item xs={12}>
                <Box>
                  <InputLabel sx={{ fontWeight: "700" }}>Name:</InputLabel>
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
                    name="name"
                    placeholder="Enter certificate name"
                    value={certificates.name}
                    onChange={(event) => handleChange( event)}
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
                  value={certificates.startDate}
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
                  value={certificates.endDate}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
              <Grid item xs={12}>
                <Box>
                  <InputLabel sx={{ fontWeight: "700" }}>Issuer:</InputLabel>
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
                    name="issuer"
                    placeholder="Enter issuer"
                    value={certificates.issuer}
                    onChange={(event) => handleChange(event)}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: "flex", borderBottom: "solid 1px" }}>
                  <Button
                    sx={{ color: "black", textTransform: "none" }}
                    onClick={() => handleRemoveCertificate(index)}
                    startIcon={<RemoveCircleTwoToneIcon />}
                  >
                    Remove
                  </Button>
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
            sx={{ color: "black", textTransform: "none" }}
            onClick={handleAddCertificate}
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

export default CertificatesForm;
