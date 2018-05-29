import React, { Component } from "react";

import PageWrapper from "./PageWrapper";
import CodeExample from "../common/CodeExample";
import { SectionTitle, SectionNumber, Subtitle, Text } from "../common/Layout";

export default class BotPage extends Component {
  render() {
    return (
      <PageWrapper title="Bot" subtitle="Let’s get cookin’." isEnabled={true}>
        <SectionTitle>
          <SectionNumber>1</SectionNumber>
          Stride setup
        </SectionTitle>
        <Subtitle>Lorem ipsum dolor sit</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
          arcu tortor, ut faucibus quam efficitur non. Maecenas id purus sit
          amet sem viverra rutrum. Nunc quis ipsum massa. Ctetur adipiscing
          elit. Sed porta arcu tortor, ut faucibus quam efficitur. Maecenas id
          purus sit amet sem viverra rutrum. Nunc quis ipsum massa.
        </Text>
        <CodeExample>node app.js</CodeExample>
      </PageWrapper>
    );
  }
}
