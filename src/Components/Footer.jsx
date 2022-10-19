import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";
import { Link } from "react-scroll";


const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 , backgroundColor:"#edebed", }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "770",
                mb: 2,
              }}
            >
              Saurabh Pandey
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "400",
                mb: 2,
              }}
            >
              A Passionate Web Developer<br/> with good creativity skills<br/>and prepared to work on<br/> Realtime Projects...
            </Typography>
            </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Quick Links
            </Typography>

            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              ><FooterLink>Home</FooterLink></Link>
            <br />
            <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={10}
                duration={800}
              ><FooterLink>About</FooterLink></Link>
            <br />
            <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={10}
                duration={800}
              ><FooterLink>Skills</FooterLink></Link>
            <br />
            <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              ><FooterLink>Work</FooterLink></Link>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              you've found a better developer.
            </Typography>

            <IconBox>
            <a href="https://google.com" >
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} /></a>
            <a href="https://google.com" ><img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              /></a>
               <a href="https://www.linkedin.com/in/saurabh-pandey-9132b7208/" > <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              /></a>
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
