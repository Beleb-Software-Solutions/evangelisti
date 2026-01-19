/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8.326 5.09c-.073-2.323-1.278-4.046-3.487-3.497-2.442.607-2.655 4.088-.826 5.69 2.891 2.532 8.096 2.46 7.053 8.539-.768 4.47-7.3 5.564-9.963 3.143-1.586-1.442-1.614-4.811.922-4.68.036 3.089 1.752 5.159 4.587 4.263 2.401-.758 2.691-4.155.787-5.814C4.784 10.457.557 10.583.322 5.614.078.464 5.6-1.146 8.977.797 11.21 2.08 11.035 5.09 8.326 5.09"
        }
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
