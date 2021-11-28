import React from 'react'
//import { Typography } from '@material-ui/core'
import { Route, Switch} from 'react-router';
import Introduction from '../Pages/Introduction';
import Einvoice from '../Pages/Einvoice';
import Peppol from '../Pages/Peppol';
import Technology from '../Pages/Technology';
import Structure from '../Pages/Structure';
import Workflow from '../Pages/Workflow'




function Main() {
    return (
      <Switch>
         <Route exact path="/" render={props => <Introduction {...props} />} />
         <Route exact path="/einvoice" render={props => <Einvoice {...props} />} />
         <Route exact path="/peppol" render={props => <Peppol {...props} />} />
         <Route  path="/technology" render={props => <Technology {...props} />} />  
         <Route exact path="/structure" render={props => <Structure {...props} />} />
         <Route exact path="/workflow" render={props => <Workflow {...props} />} />
      </Switch>
          /*
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
          */
        
    )
}

export default Main
