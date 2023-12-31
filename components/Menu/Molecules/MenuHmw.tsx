import { Popover, Box, Grid } from "@mui/material";
import ContactOpt from "../../MenuContent/Contact/Atoms/ContactOpt";
import { socialMedia } from "../../MenuContent/Contact/Molecules/ContactMenuItem";
import AboutUsOpt from "../../MenuContent/Solutions/Atoms/AboutUsOpt";
import ListServices from "../../MenuContent/Solutions/Atoms/ListServices";
import AccordionMenuItem from "../Atoms/Accordion";
import useTheme from "../../../util/hooks/useTheme";
import ThemeButton from "../../ThemeCtrl/ThemeBtn/ThemeBtn";
import ToolpitOpt from "../../MenuContent/PagesList/Molecules/PagesList";
import { useState } from "react";
import Animate from "../../Global/Animation/Animation";

interface IMenuHmwProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onCloseFc(): void;
}

const MenuHmw = ({ open, anchorEl, onCloseFc }: IMenuHmwProps) => {
  const theme = useTheme();
  const [submenu, setSubMenu] = useState<number | null>(null);

  const changeSubmenu = (submenuIndex: number) => () => {
    if (submenu !== submenuIndex) {
      setSubMenu(submenuIndex);
    } else {
      setSubMenu(null);
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        mt: 3,
        width: "100%",
        display: {
          md: "block",
          lg: "none",
        },
      }}
      disablePortal
      elevation={3}
      onClose={onCloseFc}
    >
      <Box
        sx={{
          width: {
            xs: "90vw",
            md: "60vw",
          },
          minHeight: 500,
          borderRadius: 3,
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <AccordionMenuItem
            sumary={"Paginas"}
            expanded={submenu === 0}
            onClick={changeSubmenu(0)}
          >
            <Grid container columnSpacing={1} rowSpacing={1}>
              <ToolpitOpt />
            </Grid>
          </AccordionMenuItem>
          <AccordionMenuItem
            sumary={"Soluciones"}
            expanded={submenu === 1}
            onClick={changeSubmenu(1)}
          >
            <>
              <AboutUsOpt
                title="Peniel Construcciones"
                description="Encuentra todo lo que necesitas en un solo lugar para que estes
        siempre"
              />
              <AboutUsOpt
                sx={{ mt: 4 }}
                title="Nuestros servicios"
                description="Ofrecemos servicios que se acomodan a cualquier dimension"
              />
              <ListServices />
              <Box
                sx={{
                  width: "100%",
                  backgroundImage: "url(./image/edificios.png)",
                  backgroundPositionY: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: 80,
                  borderRadius: 2,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
              ></Box>
            </>
          </AccordionMenuItem>
          <AccordionMenuItem
            sumary={"Contacto"}
            expanded={submenu === 2}
            onClick={changeSubmenu(2)}
          >
            <>
              {socialMedia.map(({ name, description, icon, href }, i) => (
                <Animate animationNameIn="scale-in-bl" delay={i * 150} key={i}>
                  <ContactOpt
                    icon={icon}
                    title={name}
                    description={description}
                    linkTo={href}
                  />
                </Animate>
              ))}
            </>
          </AccordionMenuItem>
        </Box>
        <Box
          sx={{
            mt: 2,
            height: "fit-content",
            borderRadius: 2.5,
            p: 0.1,
          }}
        >
          <Box
            sx={{
              borderRadius: 2.5,
              p: 2,
              textAlign: "center",
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <ThemeButton />
          </Box>
        </Box>
      </Box>
    </Popover>
  );
};

export default MenuHmw;
