/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M0 37.344c2.093.002 3.129-.323 4.124-2.336L16.251 0l4.964.008 11.576 34.295c1.016 2.389 1.82 3.028 4.379 3.042v2.448H22.15v-2.448c2.679-.02 4.777-.23 4.18-3.761-.375-2.214-1.782-4.873-2.353-7.096l-12.683-.084c-.853-.119-1.03 1.17-1.284 1.882-.61 1.713-1.906 5.3-1.656 7.008.303 2.065 3.05 2.072 4.542 2.05v2.448H0zm11.682-13.87H22.91L17.52 5.526l-5.84 17.95h.001z"
        }
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
