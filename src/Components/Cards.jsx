import React from 'react'
import { Container } from '@mui/system'
import { Box, styled } from '@mui/material'
import images from "../media/ecommmmImg.jpg"
import imagess from "../media/newsImgg.jpeg"
import {Typography} from '@mui/material'
import { useMediaQuery } from 'react-responsive'


const Cards = () => {


  const BoxContain = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    gap: theme.spacing(20),
    marginBottom:"50px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));


  const imgRess = useMediaQuery({ query: '(min-width: 400px)'})
  const imgMin = useMediaQuery({ query: '(max-width: 400px)'})


  return ( 
  <>

    { imgRess && <Box id="section3" sx={{backgroundColor:"#f9f0ff", minHeight:"75vh"}}>
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop:"50px"
    }}>
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Works
      </Typography>
<BoxContain >
<Box sx={{ boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:"15px 15px 35px 35px ", textAlign:"center", paddingBottom:"15px"}}>
<Box>
<img
src={images}
alt={images}
style={{maxWidth:"300px", borderRadius:"15px 15px 0 0"}}
/>
</Box>
<h3>ECommerce WebSite</h3>
</Box>


<Box sx={{ boxShadow:" 7px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:"15px 15px 35px 35px", textAlign:"center", paddingBottom:"15px"}}>
<Box>
<img
src={imagess}
alt={imagess}
style={{maxWidth:"300px", borderRadius:"15px 15px 0 0"}}
/>
</Box>
<h3>News Website</h3>
</Box>
</BoxContain>
</Container>
</Box>
      }


      {imgMin && <Box id="section3" sx={{backgroundColor:"#f9f0ff", minHeight:"75vh"}}>
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop:"50px"
    }}>
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
        sx={{ fontSize: "25px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Works
      </Typography>
<BoxContain >
<Box sx={{ boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:"15px 15px 15px 15px ", textAlign:"center", paddingBottom:"10px", marginBottom:"-70px"}}>
<Box>
<img
src={images}
alt={images}
style={{maxWidth:"200px"}}
/>
</Box>
<h4>ECommerce Website</h4>
</Box>


<Box sx={{ boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:"15px 15px 15px 15px", textAlign:"center", paddingBottom:"10px"}}>
<Box>
<img
src={imagess}
alt={imagess}
style={{maxWidth:"200px"}}
/>
</Box>
<h4>News Website</h4>
</Box>
</BoxContain>
</Container>
</Box>}
</>
  );
}

export default Cards