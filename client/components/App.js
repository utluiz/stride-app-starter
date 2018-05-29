import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled, { injectGlobal } from "styled-components";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";

import Tooltip from "@atlaskit/tooltip";

import Menu from "./Menu";
import GlobalLoader from "./GlobalLoader";
import IngredientsPage from "./pages/IngredientsPage";
import InstructionsPage from "./pages/InstructionsPage";
import ToppingsPage from "./pages/ToppingsPage";
import BotPage from "./pages/BotPage";
import ConfigurationPage from "./pages/ConfigurationPage";
import DialogPage from "./pages/DialogPage";
import ExternalPagePage from "./pages/ExternalPagePage";
import GlancePage from "./pages/GlancePage";
import InputActionPage from "./pages/InputActionPage";
import MessageActionPage from "./pages/MessageActionPage";
import SidebarPage from "./pages/SidebarPage";
import WebhookPage from "./pages/WebhookPage";

import actions from "../store/actions";

import LogoImage from "../../public/logo.png";

injectGlobal`
  body {
    overflow: hidden;
    position: fixed;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Nav = styled.nav`
  flex: 0 0 auto;
  background: linear-gradient(#5243aa, #9280ee);
  padding: 36px;
`;

const Content = styled.section`
  flex: 1 1 auto;
  overflow: auto;
  background-color: #fafbfc;
`;

const PageTitle = styled.h1`
  background-color: rgba(0, 0, 0, 0.14);
  border-radius: 30px;
  text-align: center;
`;

const Logo = styled.img`
  padding: 12px 56px;
`;

// const ConfigBox = styled.div`
//   background-color: white;
//   padding: 36px;
//   margin: 0 auto 0 auto;
//   width: 80%;
//   box-shadow: 4px 4px 16px #f4f5f7;
//   border-radius: 10px;
//   border: 1px solid rgba(9, 30, 66, 0.08);
//   color: rgba(9, 30, 66, 0.64);
// `;
//
// export const Box = ({ name, children, hasDivision }) => (
//   <ElementBox name={name}>
//     {hasDivision && <PreviewDivision />}
//     <ConfigBox>{children}</ConfigBox>
//   </ElementBox>
// );
//
// Box.prototype.propTypes = {
//   children: PropTypes.node,
//   name: PropTypes.string,
//   hasDivision: PropTypes.bool
// };

export class App extends Component {
  static propTypes = {
    initApp: PropTypes.func
  };

  componentDidMount() {
    this.props.initApp();
  }

  render() {
    return (
      <HashRouter>
        <Container>
          <GlobalLoader />
          <Nav role="navigation">
            <Tooltip content="Stride App Starter Kit" position="right">
              <PageTitle>
                <Logo src={LogoImage} />
              </PageTitle>
            </Tooltip>
            <Menu />
          </Nav>
          <Content id="contentScrollElement">
            <Switch>
              <Route exact path="/ingredients" component={IngredientsPage} />
              <Route exact path="/instructions" component={InstructionsPage} />
              <Route exact path="/toppings" component={ToppingsPage} />
              <Route exact path="/toppings/bot" component={BotPage} />
              <Route
                exact
                path="/toppings/configuration"
                component={ConfigurationPage}
              />
              <Route exact path="/toppings/dialog" component={DialogPage} />
              <Route
                exact
                path="/toppings/externalPage"
                component={ExternalPagePage}
              />
              <Route exact path="/toppings/glance" component={GlancePage} />
              <Route
                exact
                path="/toppings/inputAction"
                component={InputActionPage}
              />
              <Route
                exact
                path="/toppings/messageAction"
                component={MessageActionPage}
              />
              <Route exact path="/toppings/sidebar" component={SidebarPage} />
              <Route exact path="/toppings/webhook" component={WebhookPage} />
              <Redirect to="/ingredients" />
            </Switch>
          </Content>
        </Container>
      </HashRouter>
    );
  }
}

export default connect(null, {
  initApp: actions.app.init.start
})(App);
