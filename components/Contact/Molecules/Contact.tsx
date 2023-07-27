import { Box, Container, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import FacebookShareButton from "../../Global/FacebookShare/FacebookShare";
import SocialMediaGroup from "../Atoms/SocialMediaGroup";

export interface IStats {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

interface IHeaderProps {
  request: IStats[];
}

const Contact = ({ request }: IHeaderProps) => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <Container maxWidth="lg">
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InView
            onChange={(inView) => {
              setInview(inView);
            }}
            threshold={1}
            delay={0}
          >
            <Box
              sx={{
                opacity: inview ? 1 : 0,
                transition: "all .4s linear",
                textAlign: { xs: "center", md: "center" },
              }}
              component={"h1"}
            >
              <Typography
                fontSize={{
                  xs: "50px",
                  sm: "60px",
                  md: "70px",
                  lg: "80px",
                }}
                textAlign={{ xs: "center", md: "center" }}
                letterSpacing={{ xs: "-2px", sm: "-3px" }}
                sx={{ fontWeight: 700, lineHeight: 1 }}
              >
                Contactános facilmente
              </Typography>
            </Box>
          </InView>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={{
              xs: "1rem",
              md: "1.5rem",
              lg: "1.5rem",
            }}
            textAlign={{ xs: "center", md: "center" }}
            sx={{
              fontWeight: 300,
              lineHeight: 1,
              maxWidth: {
                xs: "100%",
                md: "70%",
                lg: "60%",
              },
            }}
          >
            Somos una empresa comprometida con la satisfaccion de nuestros
            clientes, por eso habilitamos varios canales de comunicacion para
            que esten siempre en contacto con nostros, de esta manera podemos
            asegurar una transparencia y una correcta trazabilidad de cada
            operacion y atencion a usuarios y clientes. Puedes escribirnos de
            forma facil a traves de nuestra
            <Typography
              component={Link}
              sx={{
                lineBreak: "anywhere",
                mx: 1,
                fontSize: "inherit",
                lineHeight: "inherit",
              }}
              href="https://wa.me/573203379213"
              target="__blank"
            >
              Linea de WhatsApp
            </Typography>
            o a nuestro
            <Typography
              component={Link}
              sx={{
                lineBreak: "anywhere",
                mx: 1,
                fontSize: "inherit",
                lineHeight: "inherit",
              }}
              target="__blank"
              href="mailto:construccionesyacabadospeniel@gmail.com."
            >
              correo electrónico
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            py: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SocialMediaGroup />
        </Box>
        <FacebookShareButton />
      </Box>
      <Swiper
        slidesPerView={5}
        breakpoints={{
          640: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 11,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 17,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {request.map(({ name, flags }, i) => {
          return (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Image
                  width={50}
                  height={50}
                  src={flags.png}
                  alt={name.common}
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Contact;
