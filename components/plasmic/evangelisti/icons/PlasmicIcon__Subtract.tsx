/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubtractIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubtractIcon(props: SubtractIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1287 647"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M647.533.012c353.407 2.063 639.217 266.834 639.217 593.146l-.02 3.836a551 551 0 0 1-2.6 50.006h-2.01a554 554 0 0 0 2.63-53.842C1284.75 266.821 997.749 2 643.373 2S2 266.821 2 593.158c0 18.149.89 36.108 2.628 53.842h-2.01a554 554 0 0 1-2.605-50.006L0 593.158C0 265.566 288.048 0 643.373 0z"
        }
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
