
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import einvoiceHeader from '../Img/einvoiceHeader.svg'
import { Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';


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
  paper: {
    padding: theme.spacing(1)
  }
}));

export default function Einvoice() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={0}>
       <Grid item xs={12}>
        <Box p={1} m={1}>
         <Typography variant="h5" component="h2" >E-INVOICE SOLUTION DESIGN</Typography>
        </Box> 
        <Box p={1} m={1}>
         <Typography variant="body2" component="p" >
         E-invoicing or Electronic Invoicing refers to the automated direct transmission 
              and exchange of invoices between software systems of the buyers and suppliers.
              It is an early and quick win candidate that identified in the complex chain of sub-processes of P2P
                <br />
         </Typography>
        </Box> 
       </Grid>
        <Grid item xs={12}>
            <Card className={classes.root} elevation={0} square>
                
                <Box display="block" flexDirection="row">
                    <Box> 
                    <object type="image/svg+xml" data={einvoiceHeader} aria-label="Sheet music for Beethoven's" />
                    </Box>
                </Box> 
            </Card>
        </Grid>

        <div className={classes.root}>
      <Grid container  >
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0} square>
          <Typography variant="h6" component="h2">BENEFIT</Typography>
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
          <Typography variant="h6" component="h2">fast and accurate</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
           
          <Typography variant="body2" component="p" >
          The solution will enable Health Group to get compliant 
          to Australian government financial regulatory requirements, 
          guidelines, and mandates. The digitisation of invoicing data will 
          deliver faster, more accurate and complete data, 
          supporting real-time business decisions for cash flow, procurement.
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
          <Typography variant="h6" component="h2">paperless and cost reducer</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
          <Typography variant="body2" component="p" >
             E-Invoicing eliminates paper, uses less energy,
            and resources, and minimises physical storage 
            space which are all important sustainability focuses for 
            Commonwealth Entity such as Health Group.It also Reduced payment 
            times and improved business cash flow, especially in government 
            purchasing transactions. 
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
          <Typography variant="h6" component="h2">facilitate finance</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
          <Typography variant="body2" component="p" >
          The faster processing and payment of invoices with 
          E-invoicing will result in huge cost savings. 
          Government Statistics  estimates that it is 
          approximately 70% cheaper to process an E-Invoice than traditional 
          paper or PDF invoices; saving the Health Group
           Finance team time spent manually entering invoices
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
          <Typography variant="h6" component="h2">consistently standarized</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
          <Typography variant="body2" component="p" >
          E-invoicing standards will ensure that information 
          exchanged is correct. Reducing manual handling and the 
          re-keying of information by the Health Group’s Finance 
          team will mean fewer incorrect or lost invoices.
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
          <Typography variant="h6" component="h2">secured</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
          <Typography variant="body2" component="p" >
          Direct and secure E-Invoices will be received directly 
          into Health Group’s SAP Concur instance, 
          minimising the risk of fake or compromised invoices.
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
          <Typography variant="h6" component="h2">prevent loss</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box p={1}> 
          <Typography variant="body2" component="p" >
          The integrity of e-invoicing will streamline interactions 
          between Health Group’s suppliers and with the government. 
          It will reduce opportunities of billing scams and money loss, 
          as the transaction is part of a secure and reliable framework
                <br />
         </Typography>
          </Box>
        </Grid>
        </Box>

      </Grid>
    </div>
    </Grid>
  </div>
  );
}




