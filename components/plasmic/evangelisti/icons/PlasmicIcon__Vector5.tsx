/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m12.532 0 .141 4.798h-1.416c-.034-1.127-.128-2.671-1.175-3.19a4 4 0 0 0-.418-.169H5.098v7.077c.114.198.277.04.457.036 1.473-.037 3.782-.185 5.175 0 .103.013.182.01.244.124v1.32h-5.77l-.106.119v7.836l.106.12h4.956c.156 0 .677-.23.837-.335.903-.592.978-2.054 1.11-3.104h1.345l-.141 4.878H0v-1.2c.89-.045 2.053-.012 2.26-1.246l.009-14.389C2.175 1.245 1.037 1.142 0 1.2V0z"
        }
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
