/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15.75 0h3.067l-6.7 7.658L20 18.078h-6.172l-4.833-6.32-5.532 6.32H.395l7.167-8.192L0 0h6.328l4.37 5.776zm-1.075 16.242h1.7L5.404 1.74H3.582l11.093 14.503z"
        }
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
