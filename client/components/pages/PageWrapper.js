import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 76px 88px;
`;

const Header = styled.div`
  display: flex;
  align-content: stretch;
`;

const PageTitle = styled.h2`
  color: #172b4d;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.3px;
`;

const PageDescription = styled.div`
  font-size: 12px;
  color: #8993a4;
  font-weight: lighter;
  margin: 6px 0;
  letter-spacing: +1px;
`;

const ContentContainer = styled.div`
  overflow: hidden;
`;

const Content = styled.div`
  margin-top: 16px;
  padding-top: 32px;
  border-top: 1px solid #d8d8d8;
`;

export default class PageWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    subtitle: PropTypes.string
  };

  render() {
    const { children, subtitle, title } = this.props;
    return (
      <Wrapper>
        <Header>
          <PageTitle>
            {title}
            {subtitle && <PageDescription>{subtitle}</PageDescription>}
          </PageTitle>
        </Header>
        <ContentContainer>
          <Content>{children}</Content>
        </ContentContainer>
      </Wrapper>
    );
  }
}
