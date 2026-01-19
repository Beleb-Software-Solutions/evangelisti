/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M33.896 24.468c-2.222-.208-3.6.712-3.798 3.176-.12 1.482.218 10.251-.065 10.7-10.39 4.86-24.9 4-28.863-9.437-2.764-9.372-.841-22.114 8.045-26.82 4.71-2.495 13.154-2.89 17.907-.438 5.488 2.83 3.822 9.033-2.027 8.788.036-2.195-.712-4.48-2.354-5.871-2.94-2.49-8.894-1.443-11.675.978-5.613 4.887-5.674 21.378-1.81 27.392 3.25 5.058 9.706 5.524 14.785 3.987-.192-2.95.232-6.206-.001-9.117-.232-2.884-1.973-3.473-4.405-3.34v-2.61h14.033l.228.244z"
        }
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
