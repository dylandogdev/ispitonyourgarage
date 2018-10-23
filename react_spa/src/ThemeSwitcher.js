import React, { Component } from "react";
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap';

class ThemeSwitcher extends Component {
  render() {
    return (
      <Row>
      <ButtonDropdown className="themeSwitcher">
        <Button id="caret">Theme</Button>
        <DropdownToggle caret size="lg" />
        <DropdownMenu>
          <DropdownItem>Primary Theme</DropdownItem>
          <DropdownItem>Danger Theme</DropdownItem>
          <DropdownItem>Success Theme</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Default Theme</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      </Row>
    );
  }
}

export default ThemeSwitcher;
