import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Button, SxProps, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ISelector } from "../../../types/selectors";
import { changeTheme } from "../../../redux/reducers/theme";

interface IThemeButtonProps {
  sx?: SxProps;
}

const ThemeButton = ({ sx }: IThemeButtonProps) => {
  const { theme: mode } = useSelector(
    ({ controllerTheme }: ISelector) => controllerTheme
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTheme(mode === "dark" ? "light" : "dark"));
  };

  return (
    <Button onClick={handleClick} sx={sx}>
      <Typography sx={{ fontSize: "1rem", mr: 1 }}>Modo {mode}</Typography>
      {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </Button>
  );
};

export default ThemeButton;
