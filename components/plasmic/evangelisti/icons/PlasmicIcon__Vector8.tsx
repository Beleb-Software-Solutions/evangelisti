/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M7.01 0v1.2H5.911c-.024 0-.41.174-.455.205-.502.345-.47.901-.413 1.495 1.037 3.905 2.434 7.692 3.361 11.636.108.456.176 1.082.307 1.492.028.086.031.192.138.204.046-.388.116-.79.204-1.17.99-4.28 2.626-8.349 3.622-12.619-.06-.355-.101-.72-.377-.94-.082-.067-.58-.303-.652-.303h-1.168V0h6.018v1.2c-1.076-.074-1.53.036-1.995 1.146l-5.29 17.117-1.98.037L1.876 2.16C1.523 1.322.768 1.132 0 1.2V0z"
        }
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
