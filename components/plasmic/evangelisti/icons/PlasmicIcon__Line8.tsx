/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line8Icon(props: Line8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1093 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeOpacity={".3"}
        d={"M0 .5h1093"}
      ></path>
    </svg>
  );
}

export default Line8Icon;
/* prettier-ignore-end */
