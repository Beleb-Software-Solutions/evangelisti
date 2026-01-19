/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group253IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group253Icon(props: Group253IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M19.497 0c-.016 1.146-.753 1.954-1.744 2.07-2.83.331-6.119-.25-8.986.006-1.862.167-3.245 1.986-3.364 4.037-.175 3.035.131 6.292.012 9.35.195 1.982 1.66 3.628 3.427 3.806 2.932.294 6.217-.234 9.186.02.834.22 1.48 1.077 1.469 2.06l-13.775.003C2.435 21.147.278 18.704.094 14.995c-.129-2.583-.122-6.055 0-8.642C.229 3.473 1.679.98 4.219.217c.168-.05.744-.217.87-.217zM4.91 2.16c-1.622.35-2.848 2.034-2.976 3.875-.205 2.957.161 6.211 0 9.2-.065 1.47 1.484 3.799 2.799 3.877.085.006.15-.004.106-.12-.05-.13-.375-.526-.481-.737-.46-.915-.702-1.895-.792-2.943.126-3.015-.169-6.204-.003-9.198A7.6 7.6 0 0 1 4.912 2.16z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M17.372 9.594v2.079h-9.24c-.02 0-.33-.227-.365-.267-.326-.367-.334-1.135.01-1.493.087-.09.547-.319.64-.319z"
        }
      ></path>
    </svg>
  );
}

export default Group253Icon;
/* prettier-ignore-end */
