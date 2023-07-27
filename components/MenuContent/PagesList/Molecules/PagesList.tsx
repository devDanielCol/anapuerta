import { Box } from "@mui/material";
import ContactOpt from "../Atoms/ContactOpt";
import Animate from "../../../Global/Animation/Animation";

export const socialMedia = [
  {
    name: "Sobre nosotros",
    href: "/nosotros",
  },
  {
    name: "Terminos y condiciones",
    href: "/terminos-condiciones",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];

const ToolpitOpt = () => {
  return (
    <Box
      sx={{
        px: 3,
        py: 3,
      }}
    >
      {socialMedia.map(({ name, href }, i) => (
        <Animate key={i} animationNameIn="scale-in-bl" delay={i * 150}>
          <ContactOpt linkTo={href} title={name} />
        </Animate>
      ))}
    </Box>
  );
};

export default ToolpitOpt;
