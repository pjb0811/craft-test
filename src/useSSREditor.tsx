import { useEditor, useEditorReturnType } from "@craftjs/core";
import { BaseNodeProps } from "./utils";

/**
 * This hook is used so we can achieve SSR of the CraftJS nodes.
 * If we are in SSR mode, we stub out the Editor return type.
 *
 * If you try to call editor functions in SSR mode (which should
 * never happen) you will receive an error.
 */

export function useSSREditor(props: BaseNodeProps): useEditorReturnType {
  if (props.isSSR) {
    return {} as useEditorReturnType;
  } else {
    return useEditor();
  }
}
