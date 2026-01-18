/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Clip0299IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Clip0299Icon(props: Clip0299IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 223 62"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"currentColor"} d={"M222.494 0H0v62h222.494z"}></path>
    </svg>
  );
}

export default Clip0299Icon;
/* prettier-ignore-end */
