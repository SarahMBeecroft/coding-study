import React from 'react';
import './style.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Sidebar() {
  return (
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>Library</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>In Progress</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Completed</ListItemText>
      </ListItem>
    </List>
  );
}

export default Sidebar;