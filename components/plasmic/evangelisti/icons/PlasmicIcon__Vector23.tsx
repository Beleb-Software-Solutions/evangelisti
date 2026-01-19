/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector23Icon(props: Vector23IconProps) {
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
          "M26.095 27.738h2.73l-.303 12.074H.001v-2.447c1.985-.084 4.27-.027 4.819-2.567-.04-9.078.689-18.829.194-27.871-.052-.954-.162-2.264-.639-3.066C3.446 2.294 1.532 2.435 0 2.448V0h15.702c.425.544.22 1.599.162 2.295-.23.355-3.582-.303-4.516 1.67-.097.205-.425 1.345-.425 1.502V36.63l.228.244h10.468c.285 0 1.275-.404 1.583-.582 2.433-1.41 2.454-5.963 2.892-8.555z"
        }
      ></path>
    </svg>
  );
}

export default Vector23Icon;
/* prettier-ignore-end */
