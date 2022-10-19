import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import { useMediaQuery } from 'react-responsive';


const Abouts = () => {
    const ContBox = styled(Box)(({theme}) => ({
        display:"flex",
        justifyContent:"center",
        gap: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          },
    }));


    const imgRess = useMediaQuery({ query: '(min-width: 500px)'})
    const imgMin = useMediaQuery({ query: '(max-width: 500px)'})


  return (
  <>
    {imgRess && <Box id="section2" style={{textAlign:"center", paddingTop:"40px", paddingBottom:"10px" }}>
      <div
        style={{
          width: "4%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 2, marginBottom:"40px" }}
      >
        About Me
      </Typography>
        <ContBox>
          <Box style={{maxWidth:"50%", backgroundColor:"#f9f0ff", padding:"30px", borderRadius:"30px", fontSize:"20px", marginTop:"30px", marginBottom:"60px", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <p >
              I'm <strong>Sauarbh</strong> , I've completed 3 year Diploma in Computer Science from Feroze Gandhi Polytechnic Raebareli with 77 percentile in 2021 after that I've joined a 6 month Full Stack Web Development training from Edyoda Technologies Banglore, and made many projects and Now I want to join a company where I can work on real time projects to show my Designing and Development Skills...<br/>
            </p>
          </Box>
        </ContBox>
    </Box>}


    {imgMin && <Box id="section2" style={{textAlign:"center", paddingTop:"40px", paddingBottom:"10px" }}>
      <div
        style={{
          width: "14%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
      <Typography
        variant="h3"
        sx={{ fontSize: "25px", fontWeight: "bold", color: "#000339", my: 2, marginBottom:"20px" }}
      >
        About Me
      </Typography>
        <ContBox>
          <Box style={{maxWidth:"90%", backgroundColor:"#f9f0ff", padding:"30px", borderRadius:"10px", fontSize:"17px", marginTop:"10px", marginBottom:"30px", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <p >
              I'm <strong>Saurabh</strong>, I've completed 3 year diploma in computer science from feroze gandhi polytechnic raebareli with 77 percentile in 2021 after that i've joined a 6 month full stack web development training from edyoda technologies banglore, and made many projects and Now I want to join a company to show my designing and development skills...<br/> 
            </p>
          </Box>
        </ContBox>
    </Box> }
    </>
  )
};

export default Abouts
