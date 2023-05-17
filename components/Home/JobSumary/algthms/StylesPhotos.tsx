import { INodePhotoStyles } from "./PhotoNode";

const sharedStyles = {
  height: "22%",
  width: "35%",
};

export function GetStyles(position: number): INodePhotoStyles {
  return [
    {
      ...sharedStyles,
      height: "50%",
      width: "100%",
      top: "calc(25%)",
      left: "calc(0%)",
    },
    {
      top: "0px",
      left: "0px",
      ...sharedStyles,
    },
    {
      top: `calc(100% - ${sharedStyles.height})`,
      left: "0px",
      ...sharedStyles,
    },
    {
      top: "0%",
      left: `calc(100% - ${sharedStyles.width})`,
      ...sharedStyles,
    },
    {
      top: `calc(100% - ${sharedStyles.height})`,
      left: `calc(100% - ${sharedStyles.width})`,
      ...sharedStyles,
    },
  ][position] as INodePhotoStyles;
}
