/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector21Icon(props: Vector21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M17.84 10.388c-.155-4.741-2.738-8.257-7.472-7.137-5.232 1.238-5.69 8.342-1.77 11.611 6.196 5.167 17.35 5.02 15.113 17.424-1.644 9.123-15.643 11.355-21.348 6.413-3.397-2.942-3.458-9.817 1.975-9.547.079 6.3 3.755 10.525 9.83 8.697 5.145-1.547 5.767-8.48 1.686-11.863-5.603-4.648-14.66-4.39-15.164-14.53C.167.949 12.002-2.338 19.237 1.627c4.782 2.62 4.408 8.76-1.397 8.763z"
        }
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
