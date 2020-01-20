import React from "react";
import "./style.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Sidebar() {
  return (
    <List className="menuButtons">
      <ListItem button className='buttonEffect'>
        <ListItemText id="itemTextStyle">Library</ListItemText>
      </ListItem>
      <ListItem button className='buttonEffect'>
        <ListItemText id="itemTextStyle">In Progress</ListItemText>
      </ListItem>
      <ListItem button className='buttonEffect'>
        <ListItemText id="itemTextStyle">Completed</ListItemText>
      </ListItem>
    </List>
  );
}

export default Sidebar;
