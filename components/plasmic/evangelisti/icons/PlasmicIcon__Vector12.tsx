/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M7.434 0v1.2c-.861-.042-2.042-.007-2.25 1.178.02 4.475-.322 9.28-.09 13.738.016.303.058.776.123 1.06.26 1.147 1.365 1.093 2.217 1.135v1.2H0v-1.2c.967-.054 1.975.026 2.248-1.26-.027-4.488.338-9.347.092-13.817C2.24 1.4 1.538 1.134 0 1.2V0z"
        }
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
