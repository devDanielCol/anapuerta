import * as React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import MUILink from "@mui/material/Link";
import Image from "next/image";
import Link from "next/link";
import SocialMediaGroup from "../Contact/Atoms/SocialMediaGroup";

interface IProps {
  sx?: SxProps;
}

function Copyright(props: IProps) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <MUILink color="inherit" href="#">
        Construcciones y acabados peniel SAS
      </MUILink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "normal",
        backgroundColor: "#292929",
        color: "white",
      }}
      component="footer"
    >
      <Container sx={{ minHeight: "10rem", p: 3 }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box component={"ul"} sx={{ p: 0 }}>
              <Typography sx={{ fontWeight: 700 }}>Nosotros</Typography>
              <Typography
                component={"li"}
                sx={{
                  listStyle: "none",
                  mt: 2,
                  fontSize: "0.9rem",
                  "&>a": {
                    color: "white",
                  },
                }}
              >
                <Link href={"/nosotros"}>Sobre nosotros</Link>
              </Typography>
              <Typography
                component={"li"}
                sx={{
                  listStyle: "none",
                  mt: 2,
                  fontSize: "0.9rem",
                  "&>a": {
                    color: "white",
                  },
                }}
              >
                <Link href={"/terminos-condiciones"}>
                  Terminos y condiciones
                </Link>
              </Typography>
              <Typography
                component={"li"}
                sx={{
                  listStyle: "none",
                  mt: 2,
                  fontSize: "0.9rem",
                  "&>a": {
                    color: "white",
                  },
                }}
              >
                <Link href={"/politicas"}>Politicas</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box component={"ul"} sx={{ p: 0 }}>
              <Typography sx={{ fontWeight: 700 }}>Contacto</Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Carrera 81C # 45 Sur 59 Bogotá, <br />
                Colombia
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                construccionesyacabadospeniel@gmail.com
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Bogotá (57 601) 4639392
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Resto del país (57) 3203379213
              </Typography>
              <SocialMediaGroup />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ width: "100%", backgroundColor: "white" }} />
      <Grid
        container
        sx={{
          py: 5,
        }}
      >
        <Grid item lg={4} md={4} xs={12}></Grid>
        <Grid
          item
          lg={4}
          md={4}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Copyright />

          <Typography variant="body2" align="center">
            NIT: 901538425-5
          </Typography>
          <Typography
            sx={{ mt: 2, mb: 2, color: "inherit" }}
            fontSize={{ xs: 12, md: 14 }}
          >
            Powered by
          </Typography>
          <Typography variant="body2" align="center">
            <MUILink color="inherit">Developer Information</MUILink>
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          xs={12}
          sx={{
            pt: { xs: 4, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MUILink
            href="https://www.ccb.org.co/"
            about="camara-comercio-bogota"
            sx={{ backgroundColor: "white", p: 1, borderRadius: 2 }}
          >
            <Image
              width={150}
              height={50}
              src={"/image/ccb_icon.png"}
              alt={"camara-comercio-bogota"}
            />
          </MUILink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
