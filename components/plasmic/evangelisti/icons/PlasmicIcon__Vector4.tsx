/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15.819 11.99c-1.037-.101-1.68.35-1.773 1.557-.055.726.102 5.024-.03 5.243-4.849 2.382-11.62 1.961-13.47-4.624C-.744 9.573.153 3.33 4.3 1.022 6.498-.2 10.439-.393 12.658.808c2.56 1.387 1.783 4.427-.947 4.307.017-1.076-.332-2.196-1.098-2.878-1.372-1.22-4.151-.706-5.449.48-2.62 2.395-2.647 10.476-.844 13.424 1.516 2.478 4.53 2.707 6.9 1.953-.09-1.445.108-3.041-.001-4.468-.108-1.413-.92-1.701-2.056-1.636v-1.28h6.55l.106.12z"
        }
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
