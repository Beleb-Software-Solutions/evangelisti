/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group328IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group328Icon(props: Group328IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 23"}
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
          "M13.18 5.98a6.5 6.5 0 0 0 3.84 3.84l4.539 1.68-4.54 1.68a6.5 6.5 0 0 0-3.84 3.84L11.5 21.559l-1.68-4.54a6.5 6.5 0 0 0-3.84-3.84L1.44 11.5l4.54-1.68a6.5 6.5 0 0 0 3.84-3.84l1.68-4.54z"
        }
      ></path>

      <path stroke={"currentColor"} d={"M16 11.5h42"}></path>
    </svg>
  );
}

export default Group328Icon;
/* prettier-ignore-end */
