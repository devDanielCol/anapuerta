import { Container, Box, Typography, Grid } from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import Animate from "../../Global/Animation/Animation";
import useTheme from "../../../util/hooks/useTheme";

interface ILeftSectionGridProps {
  scroll?: number;
}

const LeftSectionGrid: FC<ILeftSectionGridProps> = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
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
        </Box>
      </Container>
    </Box>
  );
};

export default LeftSectionGrid;
