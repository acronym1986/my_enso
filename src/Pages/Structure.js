
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';
import awsAnimate from '../Img/awsAnimate.svg'
import { flareData } from "../Components/Cutil";
import Chart from "../Components/Countries";





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //borderBottom: "0.1px solid black"
  },
  boxSize:{
     width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  
}));

export default function Structure() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={0}>
       <Grid item xs={12}>
        <Box p={1} m={1}>
         <Typography variant="h5" component="h2" >STRUCTURE</Typography>
        </Box> 
        <Box p={1} m={1}>
         <Typography variant="body2" component="p" >
          Since ENSO has used a wild range of technologies, 
          the structure of the technology components can be 
          broke down as below in the tree map
         </Typography>
        </Box> 
       </Grid>

        <Grid item xs={12}>
            <Card className={classes.root} elevation={0} square>
                
                <Box display="block" flexDirection="row"  >
                    <Box style={{borderTop:'0.1px solid black',borderBottom:'0.1px solid black'}}> 
                    <Box style={{paddingLeft: '10rem'}}>
                    <Chart data={flareData()} /> 
                    </Box>
                    </Box>
                    <Box p={1} m={1}>
                    <Typography variant="body2" component="p" >
                    Xaana’s connector ENSO™ leverages Amazon Web Services (AWS) 
                    cloud services to host the data, AWS has the concept of a Region,
                     which is a physical location around the world where they cluster data 
                     centres. Each logical data centre is referred to as an Availability 
                     Zone that offer high availability. 
                     The back-ups and data retention copies are responsible for disaster 
                     data recovery and business continuity. Daily auto backups are 
                     performed to ensure when the server running services go down,
                      (by malicious attack, human error, natural disaster or other) 
                      we can restore the services with the back-ups data in the cloud 
                      with minimal to zero lost. Xaana can also update the auto backup 
                      frequency under the Health group’s requirement.

                    </Typography>
                    </Box> 
                    <Box style={{borderTop:'0.1px solid black',borderBottom:'0.1px solid black'}}> 
                    <object style={{width:'80%'}} type="image/svg+xml" data={awsAnimate} aria-label="Sheet music for Beethoven's" />
                    </Box>
                    <Box p={1} m={1}>
                    <Typography variant="body2" component="p" >
                    Xaana utilises the Amazon Elastic Compute Cloud (Amazon EC2), 
                    a web service that provides secure, resizable compute capacity 
                    in the cloud. Separate Instance of AWS EC2, based on AWS 
                    Region/Availability Zone (Physical Location/Logical Data Centres) 
                    Model offers network isolation for participants such as Health Group 
                    and ensures the highest levels of security, compliance, and data protection.
                    The AWS data centre is based in North Sydney Region, Australia.  
                    Currently all the back-ups of ENSO™ are stored in AWS North Sydney node. 
                    The failure rate of AWS storage is very negligible as AWS release the 
                    service online and it is robust enough. AWS uses mirror storage. 
                    When we push the data to cloud, it stores the data in a server, 
                    and make sever mirror copies(snapshot) in other servers. 
                    If the North Sydney node goes down, the nodes in another 
                    region will load snapshot to help it recover, so AWS already 
                    perform the distributed back up

                    </Typography>
                    </Box> 
                </Box> 
            </Card>
        </Grid>

     </Grid>
  </div>
  );
} 
/*import { flareData } from "../Components/Cutil";
import Chart from "../Components/Countries";
<Chart data={flareData()} />*/

 