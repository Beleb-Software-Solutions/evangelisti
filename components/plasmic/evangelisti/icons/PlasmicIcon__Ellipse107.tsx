/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse107IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse107Icon(props: Ellipse107IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"6.253"}
        cy={"6.253"}
        r={"4.832"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2.842"}
      ></circle>
    </svg>
  );
}

export default Ellipse107Icon;
/* prettier-ignore-end */
