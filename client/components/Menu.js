import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.ul`
  list-style-type: none;
  list-style-position: inside;
  padding: 16px;
  margin: 16px 0;
`;

const Item = styled.li`
  list-style-type: none;
  list-style-position: inside;
  margin: 0;
  padding: 12px 0;
  line-height: 1.25;
  padding-left: ${props => (props.level ? (props.level - 1) * 24 + "px" : "0")};
`;

const MenuLink = styled(NavLink)`
  color: #eaeaf5;
  font-size: 16px;
  letter-spacing: -0.3px;
  text-decoration: none;
  font-weight: lighter;
  cursor: pointer;
  transition: padding-left 0.2s;

  &.active,
  :hover {
    color: white;
    text-decoration: none;
  }

  &.active {
    padding-left: 16px;
    border-left: 1px solid white;
    font-weight: normal;
  }
`;

export class MenuItem extends Component {
  static propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    level: PropTypes.number
  };

  render() {
    return (
      <Item level={this.props.level}>
        <MenuLink to={this.props.to} exact>
          {this.props.label}
        </MenuLink>
      </Item>
    );
  }
}

export default class Menu extends Component {
  static propTypes = {
    loading: PropTypes.bool
  };

  render() {
    return (
      <Container>
        <MenuItem to="/ingredients" label="Ingredients" />
        <MenuItem to="/instructions" label="Instructions" />
        <MenuItem to="/toppings" label="Toppings" />
        <MenuItem to="/toppings/bot" label="Bot" level={2} />
        <MenuItem
          to="/toppings/configuration"
          label="Configuration"
          level={2}
        />
        <MenuItem to="/toppings/dialog" label="Dialog" level={2} />
        <MenuItem to="/toppings/externalPage" label="External Page" level={2} />
        <MenuItem to="/toppings/glance" label="Glance" level={2} />
        <MenuItem to="/toppings/inputAction" label="Input Action" level={2} />
        <MenuItem
          to="/toppings/messageAction"
          label="Message Action"
          level={2}
        />
        <MenuItem to="/toppings/sidebar" label="Sidebar" level={2} />
        <MenuItem to="/toppings/webhook" label="Webhook" level={2} />
      </Container>
    );
  }
}
