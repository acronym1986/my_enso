
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import sap from '../../Img/sap.png'
import Typography from '@material-ui/core/Typography';//


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '49.25%', // 16:9 56.25
  },
  typography: {
    padding: theme.spacing(1),
  },
}));

export default function Ap() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardMedia className={classes.media} image={sap} title="frontend"/>
      <CardActions >
        <Button size="small" variant="contained">Connect</Button>
        <Typography variant="body2" component="p" style={{marginLeft: 'auto'}}>11</Typography>
      </CardActions>
    </Card>
  );
}