/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 46"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M20.934 0C35.988.91 45.08 19.446 37.276 34.247 30.055 47.944 12.677 49.1 4.125 36.374-5.727 21.714 3.16.938 19.235 0zm-1.926 2.022C4.704 2.946-3.229 21.507 5.229 34.727c8.232 12.867 25.642 10.871 31.484-3.515 5.738-14.128-4.055-30.07-17.705-29.19"
        }
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
