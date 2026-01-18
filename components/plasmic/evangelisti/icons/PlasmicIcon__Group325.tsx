/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group325IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group325Icon(props: Group325IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 23"}
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
          "M14.423 5.794a6.5 6.5 0 0 0 3.97 3.676l5.106 1.678-5.105 1.678a6.5 6.5 0 0 0-3.971 3.676l-1.873 4.493-1.871-4.493a6.5 6.5 0 0 0-3.971-3.676l-5.106-1.678L6.708 9.47a6.5 6.5 0 0 0 3.97-3.676L12.55 1.3z"
        }
      ></path>

      <path stroke={"currentColor"} d={"M17.461 11.133h34.924"}></path>
    </svg>
  );
}

export default Group325Icon;
/* prettier-ignore-end */
