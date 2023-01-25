import { generateHtml } from "./utils";

const craftJsNodes = {
  ROOT: {
    type: { resolvedName: "Text" },
    nodes: [],
    props: {},
    custom: {},
    hidden: false,
    parent: "",
    isCanvas: false,
    displayName: "Text",
    linkedNodes: {}
  }
};

console.log(generateHtml(craftJsNodes));
