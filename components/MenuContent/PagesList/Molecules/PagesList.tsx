import { Box } from "@mui/material";
import ContactOpt from "../Atoms/ContactOpt";

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
        <ContactOpt linkTo={href} key={i} title={name} />
      ))}
    </Box>
  );
};

export default ToolpitOpt;
