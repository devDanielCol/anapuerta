import PageHeader from "../components/Home/PageHeader/PageHeader";
import Content from "../components/Layout/Content/General";
import AboutUs from "../components/Home/AboutUs/AboutUs";
import Description from "../components/Home/Description/Description";
import JobServices from "../components/Home/JobServices/JobServices";
import JobSumary from "../components/Home/JobSumary/JobSumary";
import ContactUs from "../components/Home/ContactUs/ContactUs";

export default function Home() {
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
      title="Home | Peniel construcciones"
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
    </Content>
  );
}
