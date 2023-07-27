import { Box, SxProps } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { InView } from "react-intersection-observer";

interface IAnimate {
  threshold?: number;
  delay?: number;
  animationNameIn: string;
  animationNameOut?: string;
  animationTimingFunction?: string;
  animationDuration?: string;
  children?: ReactNode;
  disabledInViw?: boolean;
  sx?: SxProps;
}

const Animate: FC<IAnimate> = ({
  threshold,
  animationNameIn,
  animationNameOut,
  animationTimingFunction,
  animationDuration,
  children,
  disabledInViw,
  delay,
  sx,
}) => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <InView
      onChange={(inView) => {
        setInview(inView);
      }}
      threshold={threshold || 0.5}
      disabled={disabledInViw}
    >
      <Box
        sx={{
          ...sx,
          display: "inherit",
          justifyContent: "inherit",
          flexDirection: "inherit",
          alignItems: "inherit",
          transitionProperty: "all",
          transitionTimingFunction: "linear",
          transitionDuration: "100ms",
          opacity: inview ? 1 : 0,
          animationName: inview ? animationNameIn : animationNameOut,
          animationTimingFunction: animationTimingFunction || "ease-in-out",
          animationDuration: animationDuration || "1s",
          animationDirection: "initial",
          animationDelay: inview ? String(delay) + "ms" : "",
          transitionDelay: inview ? String(delay) + "ms" : "",
        }}
      >
        {children}
      </Box>
    </InView>
  );
};

export default Animate;
