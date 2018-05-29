import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import Spinner from "@atlaskit/spinner";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 1000;
  opacity: 0.5;
`;

export class GlobalLoader extends Component {
  static propTypes = {
    isVisible: PropTypes.bool
  };

  render() {
    if (!this.props.isVisible) {
      return null;
    }
    return (
      this.props.isVisible && (
        <Container>
          <Spinner size="large" />
        </Container>
      )
    );
  }
}

export function mapStateToProps(state) {
  return {
    isVisible: state.loading.config
  };
}

export default connect(mapStateToProps)(GlobalLoader);
