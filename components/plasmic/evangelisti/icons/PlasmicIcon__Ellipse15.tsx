/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse15Icon(props: Ellipse15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"23.898"}
        cy={"23.898"}
        r={"23.898"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse15Icon;
/* prettier-ignore-end */
