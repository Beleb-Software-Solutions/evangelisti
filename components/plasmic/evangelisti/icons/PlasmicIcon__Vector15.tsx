/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector15Icon(props: Vector15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M28.673 29.695V5.792c0-.264-.302-1.356-.43-1.66-.755-1.78-3.022-1.725-4.577-1.684V0h13.199v2.448c-1.33-.022-3.27-.097-4.224 1.086-.733.908-.623 2.117-.79 3.23l.008 33.047h-3.944L8.345 8.321v26.35c0 .158.485 1.245.628 1.446.892 1.254 2.894 1.144 4.226 1.248v2.447H0v-2.447c1.95-.06 4.164.01 4.818-2.405.29-10.09.357-20.31-.034-30.396C4.125 2.36 1.806 2.407 0 2.448V.001h10.09l18.155 29.422.428.273z"
        }
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
