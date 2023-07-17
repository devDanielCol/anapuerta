import { Description } from "@mui/icons-material";
import FacebookShareButton from "../Global/FacebookShare/FacebookShare";
import Content from "../Layout/Content/General";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import JobServices from "./JobServices/JobServices";
import JobSumary from "./JobSumary/JobSumary";
import PageHeader from "./PageHeader/PageHeader";

const HomePage = () => {
  const description =
    "Encuentra todo lo relacionado con construccion, remodelación y mejora de interiores y exteriores, servicios de edificacion y remodelacion";
  const url = "https://www.construccionespeniel.com/";
  const keywords = [
    "construccion",
    "remodelacion",
    "construcciones y acabados peniel sas",
    "construcciones bogota",
    "construcciones baratas",
    "remodelacion bogota",
    "constructora peniel",
  ];

  return (
    <Content
      title="Pagina de inicio | Construcciones y acabados peniel sas, construccionespeniel.com, bogotá, colombia"
      description={description}
      url={url}
      keywords={keywords}
    >
      <PageHeader />
      <AboutUs />
      <Description />
      <JobSumary />
      <ContactUs />
      <JobServices />
      <FacebookShareButton />
    </Content>
  );
};

export default HomePage;
