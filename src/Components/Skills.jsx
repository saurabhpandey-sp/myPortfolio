import React from 'react'
import { Box } from '@mui/material'
import htmlImg from "../media/htmlImg.png"
import cssImg from "../media/cssImg.png"
import jsImg from "../media/jsImg.png"
import jqueryImg from "../media/jqueryImg.png"
import reactImg from "../media/reactImg.png"
import reduxImg from "../media/reduxImg.png"
import muiImg from "../media/muiImg.png"
import gitImg from "../media/gitImg.png"
import skillImg from "../media/skillImg.png"
import {Typography} from '@mui/material'
import {styled} from '@mui/material'
import { useMediaQuery } from 'react-responsive'


const Skills = () => {
  
    const BoxCon = styled(Box)(({theme})=>({
      
      justifyContent:"center",
      paddingBottom:"50px",
      paddingTop:"50px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
    }));


    const imgRess = useMediaQuery({ query: '(min-width: 700px)'})
    const imgMin = useMediaQuery({ query: '(max-width: 700px)'})


  return (
    <BoxCon id="section4" sx={{textAlign:"center", }}>
      
      
      
      {imgRess &&  <>  

      <Typography variant="h3"

      sx={{ fontSize: "35px", fontWeight: "bold", color: "#444", marginBottom:"40px"}}
    >
      Technical Skills
      
    </Typography>

      <Box sx={{ display:"flex", justifyContent:"center" }}>
    <Box >
        <Box>
        <img src={htmlImg} alt={htmlImg} className="abc" style={{maxHeight:"100px", marginLeft:"20px"}}/>
        </Box>
        <Box>
        <img src={cssImg} alt={cssImg} style={{maxHeight:"100px", marginLeft:"-150px"}}/>
        </Box>
        <Box>
        <img src={jsImg} alt={jsImg} style={{maxHeight:"100px", marginLeft:"-150px"}}/>
        </Box>
        <Box>
        <img src={jqueryImg} alt={jqueryImg} style={{maxHeight:"100px", marginLeft:"20px"}}/>
        </Box>
    </Box>
    <Box>
    <img src={skillImg} alt={skillImg} style={{maxHeight:"150px", marginTop:"130px",marginLeft:"20px"}}/>
    </Box>
    <Box>
        <Box>
        <img src={reactImg} alt={reactImg} style={{maxHeight:"100px",marginRight:"20px"}}/>
        </Box>
        <Box>
        <img src={reduxImg} alt={reduxImg} style={{maxHeight:"120px", marginRight:"-150px", marginTop:"-10px"}}/>
        </Box>
        <Box>
        <img src={muiImg} alt={muiImg} style={{maxHeight:"80px", marginRight:"-150px"}}/>
        </Box>
        <Box>
        <img src={gitImg} alt={gitImg} style={{maxHeight:"130px",marginRight:"20px"}}/>
        </Box>
    </Box>
    </Box>
    </>
}


{ imgMin && <> <Typography
      variant="h3"
      sx={{ fontSize: "27px", fontWeight: "bold", color: "#444", marginBottom:"20px"}} >
        Technical Skills</Typography>

  <Box sx={{ display:"flex", justifyContent:"space-around" }}>
    <Box >
        <Box>
        <img src={htmlImg} alt={htmlImg} style={{maxHeight:"70px"}}/>
        </Box>
        <Box>
        <img src={cssImg} alt={cssImg} style={{maxHeight:"70px"}}/>
        </Box>
        <Box>
        <img src={jsImg} alt={jsImg} style={{maxHeight:"70px"}}/>
        </Box>
        <Box>
        <img src={jqueryImg} alt={jqueryImg} style={{maxHeight:"70px"}}/>
        </Box>
    </Box>
    <Box>
        <Box>
        <img src={reactImg} alt={reactImg} style={{maxHeight:"70px"}}/>
        </Box>
        <Box>
        <img src={reduxImg} alt={reduxImg} style={{maxHeight:"70px"}}/>
        </Box>
        <Box>
        <img src={muiImg} alt={muiImg} style={{maxHeight:"70px"}}/>
        </Box>
        <Box>
        <img src={gitImg} alt={gitImg} style={{maxHeight:"70px"}}/>
        </Box>
    </Box>
    </Box>
    </>
}

    </BoxCon>
  )
}

export default Skills