import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  Tooltip: {
    
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  function handleClick(e) {
    e.preventDefault();
    
  }

  return (
    <div>    
        <div>
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <Fab color="primary" className={classes.fab} size='medium'>
                <DeleteIcon />
              </Fab>
            </IconButton>
          </Tooltip>          
          <Tooltip title="Add" aria-label="Add" >
            <IconButton aria-label="Add" onClick={handleClick}>
              <Fab color="primary" className={classes.fab} size='medium' >
                <AddIcon />

              </Fab>
            </IconButton>
          </Tooltip>
        </div>
    </div>      
  );
}