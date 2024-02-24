import { Hero } from "@/components/Hero/Hero";
import { ReactElement } from "react";
import { Layout } from "../components/Layout";
import { LinkContainer } from "@/components/LinkContainer/LinkContainer";
import { LinkProps } from "@/components/Link/Link";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import Styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.heroContainer}>
        <Hero
          name={"Bianca Alexia"}
          slogan={"Gestora de tráfego"}
          briefDescription={"O sucesso do seu negócio é minha prioridade!"}
        />
      </div>
      <div className={Styles.linkContainer}>
        <LinkContainer links={links} />
      </div>
      <div className={Styles.descriptionContainer}>
        <AboutMe />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const links: LinkProps[] = [
  {
    url: "https://wa.me/5512991005469",
    label: "Fale comigo",
    icon: "whatsapp",
  },
  {
    url: "https://www.instagram.com/eubiancaalexia",
    label: "Me siga no instagram",
    icon: "instagram",
  },
];
