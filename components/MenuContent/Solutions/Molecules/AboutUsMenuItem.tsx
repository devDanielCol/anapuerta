import { Box } from "@mui/material";
import AboutUsOpt from "../Atoms/AboutUsOpt";
import ListServices from "../Atoms/ListServices";
import Animate from "../../../Global/Animation/Animation";

const AboutUsMenuItem = () => {
  return (
    <>
      <Box
        sx={{
          width: "500px",
          minHeight: "400px",
          px: 2,
          py: 4,
        }}
      >
        <Animate animationNameIn="swing-in-top-fwd">
          <AboutUsOpt
            title="Peniel Construcciones"
            description="Encuentra todo lo que necesitas en un solo lugar, remodela, construye y mejora
          todo tu entorno con nuestras excelentes ofertas de servicio."
          />
        </Animate>
        <Animate animationNameIn="swing-in-top-fwd" delay={500}>
          <AboutUsOpt
            sx={{ mt: 4 }}
            title="Nuestros servicios"
            description="Ofrecemos servicios que se acomodan a cualquier dimension"
          />
        </Animate>
        <ListServices />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(./image/edificios.png)",
          backgroundPositionY: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 100,
          borderRadius: 2,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      ></Box>
    </>
  );
};

export default AboutUsMenuItem;
