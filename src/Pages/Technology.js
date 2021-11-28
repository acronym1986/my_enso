import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Ap from '../Img/Ap.svg'
import smp from '../Img/smp.svg'
import sml from '../Img/sml.svg'
import as4 from '../Img/as4.svg'
import ocr from '../Img/ocr.svg'
import connect from '../Img/connect.svg'
import delivery from '../Img/delivery.svg'
import ssl from '../Img/ssl.svg'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 510,//345
      borderBottom: '0.1px solid black',
      borderRight:'0.1px solid black'
    },
    media: {
      height: 0,
      paddingTop: '26.25%', // 16:9 56.25%
    },
   
    avatar: {
      backgroundColor: 'black',
    },
  }));
  
  export default function Workflow() {
    const classes = useStyles();
   
    return (
      <Box display="flex" flexWrap="wrap">
      <Box>
      <Card className={classes.root} elevation={0} square>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>1</Avatar>
            }
            title="ACCESS POINT(AP)"
            titleTypographyProps={{variant:'h5' }}
        /> 
        <CardMedia>
            <object type="image/svg+xml" data={Ap} aria-label="a" />
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>
        </Card>
      </Box>
  
      <Box>
        <Card className={classes.root} elevation={0} square>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>2</Avatar>
            }
            title="SERVER METADATA PUBLISHER(SMP)"
            titleTypographyProps={{variant:'h6' }}
        /> 
        <CardMedia >
            <object type="image/svg+xml" data={smp} aria-label="a" />
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            SMP server contains information about the endpoints of receivers 
            - the URLs where to send the main documents to. The information
             within the SMP is structured by participant ID, document type ID 
             and process ID.The sender can obtain the information necessary to 
             transmit a message containing that document type to that recipient 
             from the returned metadata
            
            </Typography>
        </CardContent>
        </Card>
      </Box>
      
      <Box>
        <Card className={classes.root} elevation={0} square>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>3</Avatar>
            }
            title="SERVER METADATA LOCATOR(SML)"
            titleTypographyProps={{variant:'h6' }}
        /> 
        <CardMedia>
            <object type="image/svg+xml" data={sml} aria-label="a" />
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            The SML is the only central component in the PEPPOL E-Delivery Network that stores
             the location of all SMPs for each participant (receiver). 
             When sending electronic documents to a business on the network, 
             the SML returns the address to the SMP that contains all necessary 
             details for a correct transfer.
            </Typography>
        </CardContent>
        </Card>
      </Box>

      <Box>
        <Card className={classes.root} elevation={0} square>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>4</Avatar>
            }
            title="ENSO™ AS4 SERVER"
            titleTypographyProps={{variant:'h6' }}
        /> 
        <CardMedia>
            <object type="image/svg+xml" data={as4} aria-label="a" />
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Xaana hosts AS4 server where it receives E-Invoices PEPPOL network
            AS4 is used in the PEPPOL network for transmission of asynchronous 
            messages between corner 2 and corner 3 of the Four Corner 
            Model using the PEPPOL PKI for signature and encryption on 
            AS4 message level and SMP/SML for dynamic discovery
            </Typography>
        </CardContent>
        </Card>
      </Box>

      <Box>
        <Card className={classes.root} elevation={0} square>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>5</Avatar>
            }
            title="Optical Character Recognition(OCR)"
            titleTypographyProps={{variant:'h6' }}
        /> 
        <CardMedia>
            <object type="image/svg+xml" data={ocr} aria-label="Sheet music for Beethoven's" />
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            The ENSO™ will automatically load unread e-mails and mark them as read
            through the email listener capabilities. Invoice Detector will detect all 
            PDF attachments and categorize them. If an invoice in PDF format is detected, 
            it will be sent to Data Extractor. If a non-invoice PDF is detected, it will 
            be saved as an attachment and sent to the ERP system for reference.
            </Typography>
        </CardContent>
        </Card>
      </Box>

      <Box>
        <Card className={classes.root} elevation={0} square>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>6</Avatar>
            }
            title="ENSO™ CONNECT SERVER"
            titleTypographyProps={{variant:'h6' }}
        /> 
        <CardMedia>
            <object type="image/svg+xml" data={connect} aria-label="a" />
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            ENSO™ Web delegates the user's signup
             task to this service, connecting 
             the new user with different services that are requested by user, 
             e.g., it connects SMP Client to delegate the user registration on 
             PEPPOL network task. It also connects the user with the required 
             ERP/FMIS System (SAP Concur for HEALTH GROUP) and creates a user
              on Elasticsearch
            </Typography>
        </CardContent>
        </Card>
      </Box>
        
      <Box>
        <Card className={classes.root} elevation={0} square>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>7</Avatar>
            }
            title="6.1.6	ENSO™ E-INVOICE DELIVERY "
            titleTypographyProps={{variant:'h6' }}
        /> 
        <CardMedia>
            <object type="image/svg+xml" data={delivery} aria-label="a" />
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            delivering the E-Invoices to destination 
            or connectors, where each connector can receive, transform the E-Invoice 
            to different data formats and send the E-Invoice to ERP (e.g., SAP Concur) 
            / FMIS (e.g., SAP ECC) or External Systems. This service runs a scheduler 
            which periodically checks for new E-Invoices in the system and sends the
            E-Invoice by using configured protocol and authorization.
            </Typography>
        </CardContent>
        </Card>
      </Box>

      <Box>
        <Card className={classes.root} elevation={0} square>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>8</Avatar>
            }
            title="SSL/TSL 1.3"
            titleTypographyProps={{variant:'h6' }}
        /> 
        <CardMedia>
            <object type="image/svg+xml" data={ssl} aria-label="a" />
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Xaana has its own Certificate obtained from verified certificate authority 
            and all the communication between Xaana web server and clients is encrypted,
             the further communication with webserver and other AWS instance happens on
              Virtual Private Cloud (VPC). There is a firewall or security settings on
               each AWS instance that accepts only selected traffic, and all the other
                traffic is rejected.
            </Typography>
        </CardContent>
        </Card>
      </Box>

    </Box>
    );
    }
