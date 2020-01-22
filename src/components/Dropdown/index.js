var React = require("react");

var Menu = require("react-menu");
var MenuTrigger = Menu.MenuTrigger;
var MenuOptions = Menu.MenuOptions;
var MenuOption = Menu.MenuOption;

var Dropdown = React.createClass({
  render: function() {
    return (
      <Menu className="myMenu">
        <MenuTrigger>⚙</MenuTrigger>
        <MenuOptions>
          <MenuOption>1st Option</MenuOption>

          <MenuOption onSelect={this.someHandler}>2nd Option</MenuOption>

          <div className="a-non-interactive-menu-item">non-selectable item</div>

          <MenuOption disabled={true} onDisabledSelect={this.otherHanlder}>
            disabled option
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  }
});

export default Dropdown;
