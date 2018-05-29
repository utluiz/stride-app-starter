import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { AkCodeBlock } from "@atlaskit/code";

const Container = styled.div`
  box-sizing: border-box;
  min-size: 500px;
  max-height: 700px;
  overflow: auto;
  padding: 8px 0;
`;

export default class CodeExample extends Component {
  static propTypes = {
    children: PropTypes.string
  };

  render() {
    return (
      <Container>
        <AkCodeBlock
          language="json"
          text={this.props.children ? this.props.children : ""}
        />
      </Container>
    );
  }
}
