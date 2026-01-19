/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector20Icon(props: Vector20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15.02 0v2.448h-2.352c-.052 0-.877.356-.975.42-1.077.703-1.006 1.839-.885 3.049 2.223 7.969 5.215 15.698 7.203 23.744.23.931.376 2.208.657 3.046.06.176.066.392.295.416.1-.792.249-1.614.437-2.387 2.122-8.736 5.626-17.037 7.76-25.75-.129-.725-.216-1.469-.806-1.92-.177-.135-1.245-.617-1.399-.617h-2.502V.002h12.895v2.447c-2.306-.152-3.277.073-4.274 2.338L19.74 39.717l-4.244.074L4.02 4.407C3.263 2.7 1.645 2.31 0 2.45V.002h15.02z"
        }
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
