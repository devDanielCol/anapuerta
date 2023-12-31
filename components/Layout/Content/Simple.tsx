import { IconButton } from "@mui/material";
import { FC, ReactNode } from "react";
import BodyDocument from "../Body";
import FooterDocument from "../Footer";
import HeadDocument from "../Head";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NavbarDeskopSimple from "../../Navbar/NavbarDeskop/Molecules/NavbarDeskopSimple";
import NavbarMobileSimple from "../../Navbar/NavbarMobile/Molecules/NavBarMobileSimple";

interface ContentSimpleProsps {
  children?: ReactNode;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  url: string;
}

const ContentSimple: FC<ContentSimpleProsps> = (props) => {
  return (
    <>
      <HeadDocument {...props} />
      <BodyDocument>
        <>
          <NavbarDeskopSimple />
          <NavbarMobileSimple />
          <>{props.children}</>
          <FooterDocument />
          <IconButton
            href="/#"
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "#ffea00",
              color: "black",
              "&:hover": {
                backgroundColor: "#ffea00",
                color: "black",
              },
            }}
          >
            <KeyboardDoubleArrowUpRoundedIcon />
          </IconButton>
          <IconButton
            href="https://wa.me/573203379213"
            target="__blank"
            sx={{
              position: "fixed",
              bottom: "80px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "#24d366",
              "&:hover": {
                backgroundColor: "#24d366",
              },
              color: "white",
            }}
          >
            <WhatsAppIcon sx={{ width: "50px", height: "50px" }} />
          </IconButton>
        </>
      </BodyDocument>
    </>
  );
};

export default ContentSimple;
