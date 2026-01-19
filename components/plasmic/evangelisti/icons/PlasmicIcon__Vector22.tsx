/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M30.494 9.952H27.61c-.133-1.982-.352-5.469-2.195-6.532-.187-.108-1.09-.484-1.218-.484h-5.993v31.246c0 .2.354 1.376.478 1.608.893 1.673 3.283 1.517 4.832 1.575v2.447H6.827v-2.447c1.8-.12 4.306.238 5.08-1.962.15-.432.382-1.626.382-2.036V3.182l-.228-.245H6.296c-.054 0-.896.305-1.024.368C3.19 4.33 3.055 7.819 2.882 9.953H0L.152 0h29.963l.235.563.144 9.39z"
        }
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
