import React, { Component } from "react";

import PageWrapper from "./PageWrapper";

export default class DialogPage extends Component {
  render() {
    return (
      <PageWrapper title="Dialog" subtitle="Lorem ipsum..." isEnabled={true}>
        blah
      </PageWrapper>
    );
  }
}
