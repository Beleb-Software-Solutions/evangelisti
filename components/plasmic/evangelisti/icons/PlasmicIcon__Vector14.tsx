/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector14Icon(props: Vector14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15.931 0v2.448c-2.224-.147-4.876.16-4.862 3.174l.02 29.036c.402 2.657 2.827 2.653 4.841 2.707v2.447H0v-2.447c2.524-.06 4.674-.146 4.988-3.365-.365-9.028.549-18.596.026-27.563C4.798 2.73 3.191 2.354 0 2.447V0z"
        }
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
