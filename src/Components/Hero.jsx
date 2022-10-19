import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbars from "./Navbar";
import heroImg from "../media/myPicPng.png";
import CustomButtons from "./CustomButton";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";


const Hero = () => {

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const imgRes = useMediaQuery({ query: '(max-width: 900px)'})

  const imgMax = useMediaQuery({query: '(min-width: 900px)'})

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#4f3f59",
    fontWeight: "bold",
    margin: theme.spacing(3, 0, 3, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box id="section1"  sx={{ backgroundColor: "#f9f0ff", minHeight: "80vh" }}>
      <Container>
        <Navbars />
        <CustomBox>
          <Box sx={{ flex: "1"}} marginTop="-45px">
          <Typography
              variant="body2"
              sx={{
                fontSize: "30px",
                color: "#687690",
                fontWeight: "500",
                mt: 5,
                mb: 4,
              }}
            >
              Welcome !!
            </Typography>
            
            <Title variant="h1">
              I'm Saurabh
            </Title>
            <Title variant="h3">
              Web Developer
            </Title>
            <Typography
              variant="body2" marginBottom={5}
              sx={{ fontSize: "18px", color: "#4f3f59" }}
              
            >
              I'm React js developer  I've made many projects<br/> Now I'm seeking for the job
              as a Frontend Developer...
            </Typography>
            <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
              ><CustomButtons
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="HIRE ME"
              heroBtn={true}
            /></Link>
          </Box>

          {imgRes && <Box sx={{ flex: "1.25", marginLeft:"22px", justifyContent:"center"  
        }}>
          <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth:"80%", marginLeft:"10px",marginBottom:"-7px"}}
            />
          </Box> }


          {imgMax && <Box sx={{ flex: "1.25", marginLeft:"22px", justifyContent:"center" 
        }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth:"70%", marginBottom:"-7px", marginLeft:"140px", marginTop:"-124px"}}
            />
          </Box> }
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
