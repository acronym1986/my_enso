
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import backend from '../../Img/backend.png';
import backinfo from '../../Img/backinfo.png'
import Popover from '@material-ui/core/Popover'; //
import Typography from '@material-ui/core/Typography';//


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: 'gray',
  },
  media: {
    height: 0,
    paddingTop: '49.25%', // 16:9 56.25
  },
  typography: {
    padding: theme.spacing(1),
  },
  
}));

export default function Backend() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);//new
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined; //new


  return (
    <Card className={classes.root} elevation={3}>
      <CardMedia
        className={classes.media}
        image={backend}
        title="frontend"
      />
      <CardActions>
        <Button size="small" variant="contained" onClick={handleClick}>Generate API</Button>
        <Typography variant="body2" component="p" style={{marginLeft: 'auto', color: "#FFFFFF"}}>2</Typography> 
      </CardActions>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
         <img src={backinfo} style={{width:300}} alt='finput'/>
      </Popover>
    </Card>
  );
}