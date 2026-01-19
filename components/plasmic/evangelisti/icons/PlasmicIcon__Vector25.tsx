/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 86 93"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M44.857 0c32.257 1.858 51.736 39.68 35.017 69.884-15.474 27.951-52.71 30.311-71.035 4.34C-12.271 44.312 6.773 1.915 41.216 0zM40.73 4.127C10.08 6.011-6.918 43.885 11.205 70.864 28.843 97.12 66.148 93.047 78.667 63.69 90.963 34.861 69.978 2.33 40.73 4.127"
        }
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
