/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
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
          "m12.532 0 .142 4.798h-1.416c-.031-1.133-.123-2.668-1.176-3.19a4 4 0 0 0-.417-.168H5.098v7.116h5.77l.107.12v1.32h-5.77l-.107.119v7.836l.106.12h4.957c.155 0 .677-.23.837-.335.938-.616.95-2.023 1.11-3.104h1.345l-.142 4.878H.001v-1.2c.691-.063 1.604.038 2.053-.679.248-.396.223-.894.286-1.356-.19-4.271.24-8.799 0-13.04-.022-.373-.08-1.01-.254-1.312C1.636 1.145.73 1.182 0 1.199V0z"
        }
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
