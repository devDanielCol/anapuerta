import { Box, SxProps } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ISelector } from "../../../types/selectors";
import { changeTheme } from "../../../redux/reducers/theme";
import { ReactNode } from "react";

interface IThemeButtonProps {
  sx?: SxProps;
  children?: ReactNode;
}

const ThemeButton = ({ sx, children }: IThemeButtonProps) => {
  const { theme: mode } = useSelector(
    ({ controllerTheme }: ISelector) => controllerTheme
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTheme(mode === "dark" ? "light" : "dark"));
  };

  return (
    <Box onClick={handleClick} sx={sx}>
      {children}
    </Box>
  );
};

export default ThemeButton;
