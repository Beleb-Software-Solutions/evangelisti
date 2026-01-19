/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M0 18.3c.977.001 1.46-.158 1.925-1.144L7.585 0 9.9.004l5.402 16.806c.474 1.171.85 1.484 2.044 1.491v1.2h-7.01v-1.2c1.25-.01 2.23-.113 1.95-1.843-.174-1.085-.83-2.388-1.097-3.477l-5.92-.042c-.397-.058-.48.574-.598.922-.285.84-.89 2.598-.773 3.435.141 1.012 1.423 1.015 2.12 1.005v1.2H0v-1.2zm5.452-6.796h5.24L8.176 2.708z"
        }
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
