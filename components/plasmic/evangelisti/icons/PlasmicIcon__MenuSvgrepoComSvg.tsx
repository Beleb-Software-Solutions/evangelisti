/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuSvgrepoComSvgIcon(props: MenuSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M8 24h16v-4H8zm0-5.984h16v-4H8zM8 12h16V8H8z"}></path>
    </svg>
  );
}

export default MenuSvgrepoComSvgIcon;
/* prettier-ignore-end */
