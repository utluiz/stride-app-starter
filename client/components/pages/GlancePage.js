import React, { Component } from "react";

import PageWrapper from "./PageWrapper";

export default class GlancePage extends Component {
  render() {
    return (
      <PageWrapper title="Glance" subtitle="Lorem ipsum..." isEnabled={true}>
        blah
      </PageWrapper>
    );
  }
}
