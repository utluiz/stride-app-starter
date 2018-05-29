import React, { Component } from "react";

import PageWrapper from "./PageWrapper";

export default class ExternalPagePage extends Component {
  render() {
    return (
      <PageWrapper
        title="External Page"
        subtitle="Lorem ipsum..."
        isEnabled={true}
      >
        blah
      </PageWrapper>
    );
  }
}
