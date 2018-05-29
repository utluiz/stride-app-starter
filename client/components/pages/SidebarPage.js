import React, { Component } from "react";

import PageWrapper from "./PageWrapper";

export default class SidebarPage extends Component {
  render() {
    return (
      <PageWrapper title="Sidebar" subtitle="Lorem ipsum..." isEnabled={true}>
        blah
      </PageWrapper>
    );
  }
}
