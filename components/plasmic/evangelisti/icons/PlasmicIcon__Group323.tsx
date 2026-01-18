/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group323IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group323Icon(props: Group323IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 26"}
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
          "M13.275 7.019a6.5 6.5 0 0 0 3.672 3.973l4.755 1.985-4.755 1.986a6.5 6.5 0 0 0-3.672 3.973L11.5 24.349l-1.775-5.413a6.5 6.5 0 0 0-3.672-3.973l-4.756-1.986 4.756-1.985A6.5 6.5 0 0 0 9.725 7.02L11.5 1.605z"
        }
      ></path>

      <path stroke={"currentColor"} d={"M16 13.042h32"}></path>
    </svg>
  );
}

export default Group323Icon;
/* prettier-ignore-end */
