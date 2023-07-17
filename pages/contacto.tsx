import { FC } from "react";
import { countriesApi } from "../axios/http";
import { IStats } from "../components/Contact/Molecules/Contact";
import ContentSimple from "../components/Layout/Content/Simple";
import dynamic from "next/dynamic";
import { Box, CircularProgress } from "@mui/material";

const ContactPage = dynamic(
  () => import("../components/Contact/Molecules/Contact"),
  {
    loading: () => (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    ),
  }
);

interface IContactPageProps {
  request: IStats[];
}

const Contact: FC<IContactPageProps> = ({ request }) => {
  const description = `Peniel construcciones y acabados sas pagina de contacto, llamanos y conoce mas servicios 
  de construccion, remodelacion y acabados a tu disposicion. Contáctanos, cominicate y recibe atencion y ayuda de 
  construcciones y acabados peniel sas`;

  const url = "https://www.construccionespeniel.com/contacto";
  const keywords = [
    "contactar a peniel construcciones",
    "llamar a construcciones y acabados peniel",
    "sobre peniel construcciones sas",
    "nosotros peniel construcciones y acabados sas",
    "casa construccion contacto",
    "apartamento remodelacion contacto construciones peniel",
  ];

  return (
    <ContentSimple
      title="Contactanos y aprende de nosotros | Construcciones y acabados peniel sas pagina de contacto y ayuda"
      description={description}
      url={url}
      keywords={keywords}
    >
      <ContactPage request={request} />
    </ContentSimple>
  );
};

export const getStaticProps = async () => {
  const { data: request } = await countriesApi.request<object>({
    method: "GET",
  });

  return {
    props: {
      request,
    },
  };
};

export default Contact;
