/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.381 14.552V2.838c0-.129-.14-.664-.2-.813-.353-.873-1.41-.846-2.136-.826V0h6.16v1.2c-.62-.011-1.527-.048-1.972.532-.342.445-.29 1.037-.368 1.582l.003 16.196h-1.84L3.893 4.078V16.99c0 .077.227.61.294.708.416.615 1.35.56 1.972.612v1.2H0v-1.2c.91-.03 1.944.005 2.249-1.179.135-4.944.166-9.953-.017-14.895C1.925 1.157.843 1.179 0 1.2V0h4.708l8.473 14.419.2.134z"
        }
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
