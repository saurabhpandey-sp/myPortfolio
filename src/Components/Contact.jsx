import React from 'react'
import { Box, Button,TextField, Typography,styled } from '@mui/material'
import { useMediaQuery } from 'react-responsive'


const Contacts = () => {

  const ContBox = styled(Box)(({ theme }) => ({
    textAlign:"center",
    backgroundColor:"#fcfcfc",
    justifyContent:"space-evenly",
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
    
      { imgRess && <ContBox id="section5">
      
        <Typography
        variant="h3"
        sx={{ fontSize: "30px", fontWeight: "bold", color: "#000339", my: 2, marginBottom:"40px", marginTop:"30px",paddingTop:"30px" }}
      >
        Feel Free To Contact
      </Typography>
      <Box style={{display:"flex",justifyContent:"center"}}>
  <form 
  action="https://formspree.io/f/xbjbkqqn"
  method="POST" name='emle' style={{ textAlign:"center", justifyContent:"center", paddingLeft:"20px",paddingRight:"20px ", paddingTop:"20px", paddingBottom:"40px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:"50px", borderRadius:"10px"}} >
    <Typography
        variant="h3"
        sx={{ fontSize: "20px", fontWeight: "bold", color: "#000339",marginBottom:"15px" }}
      >
        Any Message? Write Here...
      </Typography>
<Box style={{justifyContent:"center"}}>
<TextField id="outlined-basic" label="Name" name='Name' variant='outlined' style={{textAlign:"center", width:"380px"}}/>
</Box>
<Box>
<TextField id="outlined-basic" label="Email" name='Email' variant='outlined' required style={{textAlign:"center", width:"380px", marginTop:"10px"}} /> <br/>


</Box>
<Box>
<TextField id="outlined-multiline-flexible" label="Message" name='Message' multiline maxRows={4} style={{width:"380px", marginTop:"10px"}} /></Box>
<Box>
<Button variant='contained'type='submit' value='send' style={{marginTop:"10px",width:"380px"}}>Message me</Button>
</Box>
</form>
</Box> 
</ContBox>
}


{imgMin && <ContBox id="section5" >
  <Box style={{paddingTop:"20px"}}></Box>
<div
        style={{
          width: "40%",
          height: "2px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
        <Typography
        variant="h3"
        sx={{ fontSize: "20px", fontWeight: "bold", color: "#000339", my: 2, marginBottom:"20px", marginTop:"20px" }}
      >
        Feel Free To Contact
      </Typography>
<Box style={{display:"flex",justifyContent:"center"}}>
  <form 
  action="https://formspree.io/f/xbjbkqqn"
  method="POST" name='emle' style={{ textAlign:"center", justifyContent:"center",width:"80vw", paddingLeft:"20px",paddingRight:"20px ", paddingTop:"20px", paddingBottom:"20px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:"50px", borderRadius:"10px"}} >
    <Typography
        variant="h3"
        sx={{ fontSize: "14px", fontWeight: "bold", color: "#000339",marginBottom:"15px" }}
      >
        Any Message? Write Here...
      </Typography>
<Box style={{justifyContent:"center"}}>
<TextField id="outlined-basic" label="Name" name='Name' variant='outlined' style={{textAlign:"center", width:"67vw"}}/>
</Box>
<Box>
<TextField id="outlined-basic" label="Email" name='Email' variant='outlined' required style={{textAlign:"center", marginTop:"10px", width:"67vw"}} /> <br/>


</Box>
<Box>
<TextField id="outlined-multiline-flexible" label="Message" name='Message' multiline maxRows={4} style={{ marginTop:"10px", width:"67vw"}} /></Box>
<Box>
<Button variant='contained'type='submit' value='send' style={{marginTop:"10px", width:"67vw"}}>Message me</Button>
</Box>
</form>
</Box> 
</ContBox>
}
</>
  );

}

export default Contacts
