/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector24Icon(props: Vector24IconProps) {
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
          "M15.929 0v2.448c-1.845-.085-4.376-.014-4.82 2.405.043 9.13-.69 18.938-.194 28.033.035.618.124 1.584.263 2.165.557 2.338 2.925 2.23 4.752 2.314v2.447H0v-2.447c2.073-.11 4.231.053 4.817-2.57-.058-9.159.724-19.075.197-28.195C4.798 2.856 3.295 2.313.001 2.448V0h15.93z"
        }
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
