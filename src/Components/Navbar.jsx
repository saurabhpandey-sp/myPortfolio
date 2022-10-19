import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/pngsp1.png";
import { Container } from "@mui/system";
import CustomButtons from "./CustomButton";
import { Link } from "react-scroll";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";


import { useState } from "react";

 const Navbars = () => {

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About", "Work", "Skill", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >{index === 0 && <HomeIcon />}</Link>
                  <Link
                to="section2"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >{index === 1 && <FeaturedPlayListIcon />}</Link>
                  <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >{index === 2 && <MiscellaneousServicesIcon />}</Link>
                  <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >{index === 3 && <ListAltIcon />}</Link>
                  <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >{index === 4 && <ContactsIcon />}</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "66px",
    gap: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    maxWidth:"175px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logoImg} alt="logo" />
        </Box>

        <NavbarLinksBox>
        <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              > <NavLink variant="body2" > Home</NavLink></Link>
        <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={10}
                duration={600}
              ><NavLink variant="body2" >About</NavLink></Link>
        <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              ><NavLink variant="body2" >Work</NavLink></Link>

          <Link 
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={10}
                duration={1000}
              > <NavLink variant="body2" > Skills</NavLink></Link>
          
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        
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
          buttonText="Contact"
        /></Link>
      </Box>
    </NavbarContainer>
  );
};

export default Navbars;