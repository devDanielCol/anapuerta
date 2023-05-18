import { Container, Box, Typography, Grid } from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import ServiceCard from "./Molecules/ServiceCard";

interface ILeftSectionGridProps {
  scroll?: number;
}

const LeftSectionGrid: FC<ILeftSectionGridProps> = () => {
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          py: { xs: "4rem", md: "8rem" },
          px: 2,
          transition: "all .5s linear",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.8rem", md: "2rem" },
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          Te damos la{" "}
          <Typography
            sx={{
              mt: 5,
              fontSize: { xs: "1.8rem", md: "2rem" },
              color: "#ff4d4d",
              mx: 1,
            }}
            component="span"
          >
            Bienvenida
          </Typography>
          al lugar correcto
        </Typography>
        <Typography
          sx={{
            mt: { xs: 4, md: 2 },
            fontSize: { xs: "2.2rem", md: "3rem" },
            textAlign: "center",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          ¿Quienes somos?
        </Typography>
        <Typography
          sx={{
            mt: "4rem",
            fontSize: { xs: "1.1rem", md: "1.5rem" },
            textAlign: "center",
          }}
        >
          En
          <Typography
            sx={{
              mt: 5,
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              color: "#ff4d4d",
              mx: 1,
            }}
            component="span"
          >
            Construcciones y acabados peniel SAS
          </Typography>
          , somos una empresa comprometida con la satisfacción de nuestros
          clientes, somos especialistas en Diseño arquitectónico, remodelacion
          de interiores y exteriores y con todo lo referente a construcción en
          general.
        </Typography>
        <Box
          sx={{
            width: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Link
            href={"/nosotros"}
            about="sobre construcciones y acabados peniel sas"
          >
            Leer más
          </Link>
        </Box>
        <Box sx={{ mt: "4rem" }}>
          <Grid container columnSpacing={10} sx={{ justifyContent: "center" }}>
            <Grid
              item
              xs={10}
              sm={4}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                mb: 3,
              }}
            >
              <ServiceCard
                description="Construccion de estructuras y edificaciones en general"
                img="./image/construccion.jpg"
                name="Construcciones"
              />
            </Grid>
            <Grid
              item
              xs={10}
              sm={4}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                mb: 3,
              }}
            >
              <ServiceCard
                description="Acabados modernos y con un excelente nivel de profesionalismo"
                img="./image/acabados.jpg"
                name="Acabados"
              />
            </Grid>
            <Grid
              item
              xs={10}
              sm={4}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                mb: 3,
              }}
            >
              <ServiceCard
                description="Remodelacion de interiores y exteriores. Dale la vuelta a la página."
                img="./image/remodelacion.jpg"
                name="Remodelaciones"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LeftSectionGrid;
