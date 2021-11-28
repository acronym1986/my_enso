import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Main from '../Components/Main';
import { withRouter} from "react-router-dom";
import fontEnsoBlue from '../Img/fontEnsoBlue.png'
import { Box } from '@material-ui/core';
 
 



const drawerWidth = 240;//240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    //backgroundColor: 'grey',
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      //borderRight:'1px solid black'
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      borderBottom: "0.1px solid black",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    padding:'20px 0 0 15px',
    
  },

  listItem:{
     padding: '5px 0 5px 15px',
     borderBottom: "1px solid black",
 },

  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  logo:{
    width: 200,
    padding: '0 0 10px 10px',
  }
}));

function Sidebar(props) {
  const { history } = props;
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img src={fontEnsoBlue} className={classes.logo}  alt=""/>
      <div className={classes.toolbar}  />
      
          <ListItem button className={classes.listItem} onClick={() => history.push("/")}>
            <ListItemText primary={"INTRODUCTION"} />
          </ListItem>

          <ListItem button className={classes.listItem} onClick={() => history.push("/einvoice")}>
            <ListItemText primary={"EINVOICE SD"} />
          </ListItem>

          <ListItem button className={classes.listItem} onClick={() => history.push("/peppol")}>
            <ListItemText primary={"PEPPOL"} />
          </ListItem>

          <ListItem button className={classes.listItem} onClick={() => history.push("/technology")}>
            <ListItemText primary={"TECHNOLOGY"} />
          </ListItem>

          <ListItem button className={classes.listItem} onClick={() => history.push("/structure")}>
            <ListItemText primary={"STRUCTURE"} />
          </ListItem>

          <ListItem button className={classes.listItem} onClick={() => history.push("/workflow")}>
            <ListItemText primary={"WORKFLOW"} />
          </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
         position="fixed" 
         elevation={0} 
         className={classes.appBar}
         style={{ background:"#ffffff"}}
         >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography style={{color:'black'}} variant="p" noWrap>
            User Guide
          </Typography>
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main/>
        <div style={{minHeight:'2rem'}}>
          <Box p={1}>
          <Typography style={{color:'black'}} variant="p" noWrap>
            <a href="https://www.xaana.ai/terms" target="_blank" rel="noreferrer">
            Terms of Service
            </a>
          </Typography>
           <br/>
          <Typography style={{color:'black'}} variant="p" noWrap>
            <a href="https://www.xaana.ai/privacy" target="_blank" rel="noreferrer">
            Privacy Policy
            </a>
          </Typography>
          </Box>
      </div>
      </main>
    </div>
  );
}

 

export default withRouter(Sidebar);
