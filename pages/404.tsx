import { Box, Container, Typography } from "@mui/material";
import ContentSimple from "../components/Layout/Content/Simple";
import Link from "next/link";

const NotFound404 = () => {
  return (
    <ContentSimple title="404: NotFoundPage">
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(29deg, transparent 50%, #ffa800 0%)",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "30vh",
              py: 3,
            }}
          >
            <Typography sx={{ fontSize: "3rem", fontWeight: 600 }}>
              Página No Encontrada
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
              Al parecer la página que buscas no existe o está en mantenimiento
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "30vh",
              py: 3,
            }}
          >
            <Typography sx={{ fontSize: "1.5rem", fontWeight: 400 }}>
              Regresa a la pagina principal y navega por el contenido disponible
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <Link href={"/"}>Regresar a la Pagina principal</Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </ContentSimple>
  );
};

export default NotFound404;
