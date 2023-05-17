import Article from "../components/AboutUs/Article/Article";
import Presentation from "../components/AboutUs/Presentation/Presentation";
import ContentSimple from "../components/Layout/Content/Simple";

export default function Home() {
  const description = `somos una empresa comprometida con la satisfacción de nuestros
  clientes, somos especialistas en Diseño arquitectónico, remodelacion
  de interiores y exteriores y con todo lo referente a construcción en
  general.`;

  return (
    <ContentSimple
      title="Sobre nostros | Peniel construcciones"
      description={description}
    >
      <Presentation />
      <Article />
    </ContentSimple>
  );
}
