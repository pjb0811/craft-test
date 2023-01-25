import { Node, useNode, useNodeReturnType } from "@craftjs/core";
import _ from "lodash";
import { BaseNodeProps } from "./utils";

/**
 * This hook is used so we can achieve SSR of the CraftJS nodes.
 * If we are in SSR mode, we stub out the Node return type.
 *
 * The collect function type is slightly different to what the normal
 * CraftJS useNode specifies. The node it provides in the callback is
 * optional, indicating it may or may not be there (in SSR it will not
 * be there). This lets consumers provide a default value.
 */

export function useSSRNode<A>(
  options: BaseNodeProps,
  collect?: (node?: Node) => A
): useNodeReturnType<A> {
  if (options.isSSR) {
    const collected: A = collect ? collect(undefined) : ({} as A);
    return {
      id: options.id,
      inNodeContext: false,
      connectors: {
        connect: _.identity,
        drag: _.identity
      },
      actions: {
        setProp: _.noop,
        setCustom: _.noop,
        setHidden: _.noop
      },
      setProp: _.noop,
      ...(collected as any)
    };
  } else {
    return useNode(collect);
  }
}
