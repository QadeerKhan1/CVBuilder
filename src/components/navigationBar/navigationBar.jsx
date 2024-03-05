import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import mylogo from "../../assets/Bran.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { toggleAccordion } from "../../Redux/slices/accordionSlice/accordionSlice";
import { useDispatch } from 'react-redux';
import {  Button} from "@mui/material";
import { usePDFContext } from "../../customHooks/contentHooks";
import PrintIcon from '@mui/icons-material/Print';
const options = {
  filename: "using-function.pdf",
  page: {
    margin: 20
  }
};
const Navigation = () => {
  const dispatch = useDispatch();
  const { toPDF, targetRef, setPDF ,setAccordionOpen} = usePDFContext();
  

  const scrollToSection = (sectionId) => {
    dispatch(toggleAccordion(sectionId));
  };
  

  return (
   <>
   
   <AppBar position="static" sx={{width:'60px',background:'#f2e8f4',height:'100%'}} >
      <Toolbar sx={{display:'flex',flexDirection:'column'}}>
      <Box><img src={mylogo} width={'70px'} height={'70px'} alt="logo here" /></Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',gap:3,padding:'10px'}}>
          <IconButton  sx={{
          "&:hover": {
            transform: "scale(1.7)", // Increase size on hover
            backgroundColor: "#e0f2f1",
          },
        }} onClick={() => {scrollToSection("home");toPDF();}}  >
            <PrintIcon sx={{transform:'scale(1.5)',color:'#005149'}} />
          </IconButton>
          <IconButton  sx={{
          "&:hover": {
            transform: "scale(1.7)", // Increase size on hover
            backgroundColor: "#e0f2f1",
          },
        }} onClick={() => scrollToSection("basicInfo")} >
            <AccountCircleIcon sx={{transform:'scale(1.5)',color:'#005149'}}/>
          </IconButton>
          <IconButton  sx={{
          "&:hover": {
            transform: "scale(1.7)", // Increase size on hover
            backgroundColor: "#e0f2f1",
          },
        }} onClick={() =>{ scrollToSection("workExperience");window.print()}} >
            <WorkHistoryIcon sx={{transform:'scale(1.5)',color:'#005149',}}/>
          </IconButton>
          <IconButton  sx={{
          "&:hover": {
            transform: "scale(1.7)", // Increase size on hover
            backgroundColor: "#e0f2f1",
          },
        }} onClick={() => scrollToSection("education")} >
            <CastForEducationOutlinedIcon sx={{transform:'scale(1.2)',color:'#005149'}}/>
          </IconButton>
          <IconButton  sx={{
          "&:hover": {
            transform: "scale(1.7)", // Increase size on hover
            backgroundColor: "#e0f2f1",
          },
        }} onClick={() => scrollToSection("projects")} >
            <ApartmentOutlinedIcon sx={{transform:'scale(1.5)',color:'#005149'}}/>
          </IconButton>
          <IconButton  sx={{
          "&:hover": {
            transform: "scale(1.7)", // Increase size on hover
            backgroundColor: "#e0f2f1",
          },
        }} onClick={() => scrollToSection("skills")} >
            <EmojiEventsOutlinedIcon sx={{transform:'scale(1.5)',color:'#005149'}}/>
          </IconButton>
          
          <IconButton  sx={{
          "&:hover": {
            transform: "scale(1.7)", // Increase size on hover
            backgroundColor: "#e0f2f1",
          },
        }} onClick={() => scrollToSection("interest")} >
            <SportsEsportsIcon sx={{transform:'scale(1.5)',color:'#005149'}}/>
          </IconButton>
          <IconButton  sx={{
          "&:hover": {
            transform: "scale(1.7)", // Increase size on hover
            backgroundColor: "#e0f2f1",
          },
        }} onClick={() => scrollToSection("")} >
            <WorkspacePremiumOutlinedIcon sx={{transform:'scale(1.5)',color:'#005149'}}/>
          </IconButton>
         
          
        </Box>
      </Toolbar>
    </AppBar>
   </>
  );
};

export default Navigation;
