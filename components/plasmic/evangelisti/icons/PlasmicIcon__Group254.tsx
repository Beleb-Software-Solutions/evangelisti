/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group254IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group254Icon(props: Group254IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M41.777 0c-.035 2.339-1.614 3.987-3.736 4.223-6.065.676-13.112-.51-19.254.014-3.991.34-6.954 4.052-7.209 8.238-.375 6.192.28 12.838.026 19.077.417 4.046 3.557 7.405 7.342 7.767 6.282.602 13.322-.477 19.684.042 1.787.448 3.17 2.199 3.147 4.202l-29.516.009C5.218 43.152.596 38.167.201 30.599c-.276-5.27-.26-12.356 0-17.634C.49 7.086 3.598 1.998 9.04.444 9.4.34 10.635 0 10.903 0zM10.524 4.409c-3.477.714-6.104 4.151-6.378 7.906-.44 6.036.345 12.676 0 18.776-.14 3 3.179 7.75 5.998 7.91.182.011.322-.008.227-.246-.105-.263-.803-1.072-1.03-1.502-.988-1.868-1.505-3.868-1.697-6.007.269-6.152-.363-12.658-.008-18.769.175-3.007 1.183-5.714 2.89-8.068z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M37.227 19.578v4.242H17.428c-.046 0-.707-.462-.783-.544-.7-.75-.716-2.316.022-3.049.185-.183 1.172-.65 1.368-.65z"
        }
      ></path>
    </svg>
  );
}

export default Group254Icon;
/* prettier-ignore-end */
