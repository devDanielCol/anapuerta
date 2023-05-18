import { Container, Box, Typography } from "@mui/material";
import ContentSimple from "../../components/Layout/Content/Simple";

export default function Home() {
  return (
    <ContentSimple title="Terminos y condiciones">
      <Container maxWidth={"md"}>
        <Box sx={{ minHeight: "100vh" }}>
          <Box component={"article"}>
            <Typography
              component={"h1"}
              sx={{ fontSize: "2rem", display: "none" }}
            >
              Terminos y condiciones de Construcciones y acabados Peniel SAS
            </Typography>
            <Box component={"section"}>
              <Typography
                component={"h2"}
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 500,
                  textAlign: "left",
                  mt: 3,
                }}
              >
                Terminos y condiciones
              </Typography>
              <Typography component={"p"} sx={{ mt: 3 }}>
                El uso y consumo del contenido expuesto en este sitio web esta
                bajo supervision de sus administradores, peniel sas se reserva
                el derecho de publicar cualquier cambio en el contenido de este
                sition web sin previo aviso a sus usuarios. Para mejorar la
                calidad de sus productos tecnologicos, PENIEL SAS esta en
                continuo desarrollo y crecimiento para incrementar sus servicios
                y calidad de sus sitemas.
              </Typography>
              <Typography component={"p"} sx={{ mt: 3 }}>
                Esta pagina web tiene como fin alcanzar a publico de cualquier
                tipo, este sitio web provee informacion necesaria para contactar
                y contratar los servicios de construccion y ofertas de
                remodelación y demás servicios relacionados con el desarrollo de
                sus actividades economicas.
              </Typography>
            </Box>
            <Box component={"section"}>
              <Typography
                component={"h2"}
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 500,
                  textAlign: "left",
                  mt: 3,
                }}
              >
                Condiciones de uso
              </Typography>
              <Typography component={"p"} sx={{ mt: 3 }}>
                Este sitio web, como su contenido está protegido bajo las
                politicas de copyright, plagio o suplantación segun lo
                relacionado con los terminos nacionales e internacionales, en
                donde PENIEL SAS tiene participación. El uso inadecuado de esté
                sitio web, así mismo como el intento de robo, clonación o
                exposición de información no debida para dañar el nombre de
                PENIEL SAS o de sus colaboradores, está prohibido, y cualquier
                caso que se presente o llegará a presentarse que genere una mala
                imagen de la marca, así mismo de su reputación, utilidades,
                registro de clientes, crecimiento, ampliación o cualquier otra
                razon que afecte el desarrollo económico, laboral, competitivo,
                el ente causante de lo dicho anteriormente será denunciado y
                tratado segun las leyes colombianas y estará obligado a pagar el
                100% de los daños causados.
              </Typography>
            </Box>
            <Box component={"section"} sx={{ mb: 4, mt: 3 }}>
              <Typography
                component={"h2"}
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 500,
                  textAlign: "left",
                  mt: 3,
                }}
              ></Typography>
              <Typography component={"p"} sx={{ mt: 3 }}></Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ContentSimple>
  );
}
