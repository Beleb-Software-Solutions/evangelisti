/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
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
          "m26.853 0 .304 9.79h-3.034c-.066-2.31-.264-5.444-2.52-6.508-.143-.067-.827-.344-.894-.344h-9.785V17.46h12.364l.228.244v2.692H11.15l-.227.244v15.99l.227.244h10.62c.334 0 1.452-.467 1.794-.681 2.01-1.258 2.037-4.13 2.379-6.335h2.882l-.304 9.953H.001v-2.447c1.482-.13 3.438.076 4.4-1.386.531-.808.477-1.825.613-2.767-.406-8.716.515-17.955 0-26.61-.046-.76-.171-2.06-.545-2.677C3.507 2.337 1.564 2.412 0 2.448V0z"
        }
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
