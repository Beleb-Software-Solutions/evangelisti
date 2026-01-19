/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M14.23 4.877h-1.344c-.062-.971-.164-2.68-1.024-3.2-.088-.054-.509-.238-.57-.238H8.497v15.312c0 .098.165.674.223.788.417.82 1.532.743 2.255.772v1.2H3.186v-1.2c.84-.06 2.01.117 2.37-.962.071-.211.179-.797.179-.998V1.56l-.106-.12h-2.69c-.026 0-.42.15-.479.18-.972.504-1.034 2.213-1.115 3.259H0L.07 0h13.984l.11.276.067 4.602z"
        }
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
