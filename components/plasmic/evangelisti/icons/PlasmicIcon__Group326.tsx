/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group326IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group326Icon(props: Group326IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        d={
          "M13.245 6.677a6.5 6.5 0 0 0 3.729 3.935l4.685 1.885-4.685 1.885a6.5 6.5 0 0 0-3.729 3.935L11.5 23.441l-1.745-5.124a6.5 6.5 0 0 0-3.729-3.935L1.34 12.497l4.686-1.885a6.5 6.5 0 0 0 3.729-3.935L11.5 1.552z"
        }
      ></path>

      <path stroke={"currentColor"} d={"M16 12.541h32"}></path>
    </svg>
  );
}

export default Group326Icon;
/* prettier-ignore-end */
