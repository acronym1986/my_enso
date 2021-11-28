import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Liquid from '../Components/Liquid';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "0.1px solid black"
  },
  
}));

export default function Introduction() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
            <Card className={classes.root} elevation={0} square>
                
                <Box display="block" flexDirection="row" p={2} m={0}>
                    <Box >
                    <Typography variant="h5" component="h2" >INTRODUCTION</Typography>
                    </Box>    

                    <Box p={1}><Liquid/></Box>
                </Box> 
            </Card>
        </Grid>
    </Grid>
       
    <div style={{ width: '100%' }}>
       
      <Box display="flex" flexWrap="nowrap" bgcolor="background.paper">
        <Box   bgcolor="grey.300">
        <Card style={{borderRight:"0.1px solid black"}} elevation={0} square>
            <CardContent>       
              <Typography variant="h5" component="h2">ENSO</Typography>
              <Typography variant="body2" component="p">
                Enso is Xaana’s AI-driven integration platform for 
                seamlessly connecting Concur Invoice with the 
                PEPPOL e-Invoicing platform. It provides a clear, concise, and simple API 
                powered by deep learning. 
                It makes it easy to prototype, build, and test AI-driven integration models
              </Typography>
            </CardContent>
       </Card>
        </Box>
        <Box  bgcolor="grey.300">
        <Card  elevation={0} square>
            <CardContent>       
              <Typography variant="h5" component="h2">XAANA.AI</Typography>
              <Typography variant="body2" component="p">
              Xaana is an industry leader in digital transformation. 
              Xaana enables clients to become digitally intelligent and future ready, 
              through the capability to enable organisations to integrate 
              with end-to-end cross-functional next-generation business processes.  
              </Typography>
            </CardContent>
       </Card>
        </Box>
       
      </Box>
    </div>
  </div>
  );
}
