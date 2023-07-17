import Article from "../components/AboutUs/Article/Article";
import Presentation from "../components/AboutUs/Presentation/Presentation";
import FacebookShareButton from "../components/Global/FacebookShare/FacebookShare";
import ContentSimple from "../components/Layout/Content/Simple";

export default function Home() {
  const description = `Peniel construcciones y acabados sas es una empresa comprometida con la satisfacción sus 
  clientes, especialistas en Diseño arquitectónico, remodelacion
  de interiores y exteriores y con todo lo referente a construcción en
  general.`;

  const url = "https://www.construccionespeniel.com/nosotros";
  const keywords = [
    "que es peniel construcciones",
    "que hace peniel construcciones",
    "sobre peniel construcciones",
    "nosotros peniel construcciones",
    "nuestros servicios peniel construcciones",
    "casa construccion",
    "apartamento remodelacion",
  ];

  return (
    <ContentSimple
      title="Sobre nostros, conoce más sobre peniel construccioines | Construcciones y acabados peniel sas, pagina sobre nostros, construccionespeniel.com"
      description={description}
      url={url}
      keywords={keywords}
    >
      <Presentation />
      <FacebookShareButton />
      <Article />
    </ContentSimple>
  );
}
