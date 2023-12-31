import { Box } from "@mui/material";
import ContactOpt from "../Atoms/ContactOpt";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import Animate from "../../../Global/Animation/Animation";

export const socialMedia = [
  {
    name: "Facebook",
    icon: <FacebookRoundedIcon />,
    description: "Siguenos y comparte",
    href: "https://www.facebook.com/profile.php?id=100075904522414&mibextid=ZbWKwL",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    description: "Mira imagenes y videos",
    href: "https://instagram.com/construccionespeniel?igshid=YmMyMTA2M2Y=",
  },
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
    description: "Envianos un mensaje",
    href: "https://wa.me/573203379213",
  },
  {
    name: "Email",
    icon: <AlternateEmailRoundedIcon />,
    description: "Solicitanos informacion",
    href: "mailto:construccionesyacabadospeniel@gmail.com",
  },
  {
    name: "Telefono",
    icon: <PermPhoneMsgRoundedIcon />,
    description: "Agenda una asesoria",
    href: "tel:3203379213",
  },
];

const ToolpitOpt = () => {
  return (
    <Box
      sx={{
        width: "300px",
        minHeight: "400px",
        px: 2,
        py: 4,
      }}
    >
      {socialMedia.map(({ name, description, icon, href }, i) => (
        <Animate key={i} animationNameIn="scale-in-bl" delay={i * 150}>
          <ContactOpt
            linkTo={href}
            icon={icon}
            title={name}
            description={description}
          />
        </Animate>
      ))}
    </Box>
  );
};

export default ToolpitOpt;
