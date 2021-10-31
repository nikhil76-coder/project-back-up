// import React from 'react'
// import Appbar from './OrgUsers'

// function OrgUsers() {
//     return (
       
//     )
// }

// export default OrgUsers


import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Appbar from './OrgUsers'
import Docform from './Pages/Userdocucemntpage'
import Userdashboard from './Pages/userdashboard/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import { positions } from '@material-ui/system';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      
    },
  },
}))(Chip);

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function OrgUsers(props) {
  return (
   
    <div>
      
       <Appbar />
       
       <div
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '15%',
        transform: 'translate(-50%, -50%)'
    }}
>
      <Breadcrumbs aria-label="breadcrumb" margin="auto">
      <StyledBreadcrumb
       
        
        label="Dashboard"
        icon={<HomeIcon fontSize="small" />}
        // onClick= {Docform}
      />
      <StyledBreadcrumb component="a" href="#" label="Category (Loan)" onClick={handleClick} />
      <StyledBreadcrumb
        label="Accessories"
        deleteIcon={<ExpandMoreIcon />}
        onClick={handleClick}
      
      />
    </Breadcrumbs>
   
    
     
  
    
   
    </div>
    <Userdashboard/>
    </div>
  );
}
