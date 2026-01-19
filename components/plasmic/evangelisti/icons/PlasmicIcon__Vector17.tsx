/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m26.852 0 .304 9.79h-3.034c-.073-2.298-.276-5.45-2.52-6.509-.142-.067-.827-.344-.893-.344h-9.786v14.44c.244.404.594.083.98.074 3.157-.075 8.104-.377 11.088 0 .221.027.39.02.524.253v2.692H11.15l-.227.244v15.99l.227.244h10.62c.335 0 1.451-.467 1.794-.681 1.935-1.21 2.095-4.193 2.379-6.335h2.882l-.303 9.953H0v-2.447c1.907-.092 4.4-.025 4.841-2.543l.02-29.362C4.66 2.542 2.223 2.33 0 2.448V0h26.853z"
        }
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
