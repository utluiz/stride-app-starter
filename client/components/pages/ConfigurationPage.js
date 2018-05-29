import React, { Component } from "react";

import PageWrapper from "./PageWrapper";

export default class ConfigurationPage extends Component {
  render() {
    return (
      <PageWrapper
        title="Configuration"
        subtitle="Lorem ipsum..."
        isEnabled={true}
      >
        blah
      </PageWrapper>
    );
  }
}
