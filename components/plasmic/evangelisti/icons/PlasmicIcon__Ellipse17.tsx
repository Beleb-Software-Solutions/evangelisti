/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse17Icon(props: Ellipse17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 55"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"25.491"}
        cy={"27.12"}
        fill={"currentColor"}
        rx={"25.491"}
        ry={"27.12"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse17Icon;
/* prettier-ignore-end */
