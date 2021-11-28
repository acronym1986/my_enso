import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import Worldmap from '../Components/Worldmap'
import smpAnimateSmall from '../Img/smpAnimateSmall.svg'
import xaInvo from '../Img/xaInvo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
     
    //color: theme.palette.text.secondary,
  },
  box:{
    background: '#ffffff'
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container  >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h5" component="h2">PEPPOL</Typography>
          </Paper>
        </Grid>
        
        <Box 
          display="flex" 
          flexWrap="wrap" 
          className={classes.box}
          style={{width:'100%',borderTop:'1px solid black',borderBottom:'1px solid black'}}
        >
        <Grid item xs={12} sm={4}>
          <Box p={1}>
          <Worldmap  />
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
           
          <Typography variant="body2" component="p" >
            In February 2019, the Australian and New Zealand 
            jointly announced their intentions to adopt the Pan 
            European Public Procurement On-Line (PEPPOL) framework 
            as a Trans-Tasman e-invoicing framework. Among the many 
            benefits stated for choosing this framework, Australian 
            and New Zealand businesses can now increase the business 
            opportunities in and between the two countries, while at 
            the same time integrate with a global trading environment
            <br/>
            There are currently 17 local Peppol Authorities: Norway, 
            Sweden, Denmark, the Netherlands, England, Belgium, Italy, 
            Poland, Germany, Ireland, Singapore, New Zealand, Australia, 
            Greece, Iceland, Portugal and Japan. Many Peppol Authorities
            have some deviation to the rules set out by OpenPeppol
         </Typography>
          </Box>
        </Grid>
        </Box>
        
        <Box 
          display="flex" 
          flexWrap="wrap" 
          className={classes.box}
          style={{width:'100%',borderBottom:'1px solid black'}}
        >
        <Grid item xs={12} sm={4}>
        <Box p={1}>
          <object   type="image/svg+xml" data={xaInvo} aria-label="a" />
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
          <Typography variant="body2" component="p" >
            Xaana is a participant of the PEPPOL network - a certified PEPPOL Access 
            Point Provider, and Service Metadata Publisher (SMP). 
            In the Four-corner model, participants select their Access Points (AP) 
            independently of each other. An AP is like a communication node in 
            the network. Based on a similar concept as making a phone call 
            between two participants, regardless of their phone’s model, 
            brand or network carrier, the access points allow different software 
            or systems to communicate with each other, regardless of their service provider.
                <br />
         </Typography>
          </Box>
        </Grid>
        </Box>

        <Box 
          display="flex" 
          flexWrap="wrap" 
          className={classes.box}
          style={{width:'100%',borderBottom:'1px solid black'}}
        >
        <Grid item xs={12} sm={4}>
          <Box p={1}>
          <object   type="image/svg+xml" data={smpAnimateSmall} aria-label="a" />
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
          <Typography variant="body2" component="p" >
              To send an invoice via PEPPOL, a sender participant (corner 1)
              must have access to an Access Point 2 (corner 2). When sending 
              the invoice, the invoice sender provides the recipient’s participant ID, 
              which is an ABN number in Australia used as the primary identification
              of the participant. Utilising this ID, Access Point 2 generates the correct 
              DNS names for the invoice recipients and thus reaches the associated SMP server. 
              Thus, upon a request from Access Point 2, the SMP server checks which Access 
              Point 3 is to be accessed and whether the said Access Point can accept 
              the document. Once approved and upon confirmation of other specific data, 
              Access Point 2 can now access the recipient’s specific Access Point 3.
              This makes the invoice available to the recipient. To guarantee that trades 
              in the PEPPOL network continue in a normalized way, correspondence is carried 
              out utilizing Business Interoperability Specification (BIS). 
              This defines a clear standard for the exchange of documents within the network.
                <br />
         </Typography>
          </Box>
        </Grid>
        </Box>

      </Grid>
    </div>
  );
}




