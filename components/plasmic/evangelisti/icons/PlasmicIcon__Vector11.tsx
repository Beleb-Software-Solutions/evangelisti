/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
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
          "M12.178 13.593h1.275l-.142 5.917H.001v-1.2c.926-.04 1.992-.013 2.248-1.257-.018-4.449.322-9.227.091-13.658-.024-.468-.076-1.11-.298-1.503C1.608 1.124.715 1.193 0 1.199V0h7.328c.198.267.102.783.075 1.125-.107.173-1.671-.149-2.107.818-.045.1-.198.66-.198.736V17.95l.106.12h4.885c.133 0 .595-.198.739-.285 1.135-.691 1.145-2.923 1.35-4.193z"
        }
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
