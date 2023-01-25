import { Heading } from "@chakra-ui/react";
import React from "react";
import { BaseNodeProps } from "./utils";
import { useSSRNode } from "./useSSRNode";

export interface Props extends BaseNodeProps {
  text: string;
}

export const Text = (props: Props) => {
  const { text } = props;

  const {
    connectors: { connect, drag }
  } = useSSRNode(props);

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <Heading>{text}</Heading>
    </div>
  );
};

Text.defaultProps = {
  text: "Text"
};

Text.craft = {
  name: "Text",
  props: Text.defaultProps
};
