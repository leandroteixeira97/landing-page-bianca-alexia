import { Hero } from "@/components/Hero/Hero";
import { ReactElement } from "react";
import { Layout } from "../components/Layout";
import { LinkContainer } from "@/components/LinkContainer/LinkContainer";
import { LinkProps } from "@/components/Link/Link";
import { AboutMe } from "@/components/AboutMe/AboutMe";

export default function Home() {
  return (
    <>
      <Hero
        name={"Bianca Alexia"}
        slogan={"Gestora de tráfego"}
        briefDescription={"O sucesso do seu negócio é minha prioridade!"}/>
      <LinkContainer links={links} />
      <AboutMe />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const links: LinkProps[] = [
  {url: "https://wa.me/5512991005469", label: "Fale comigo", icon: "whatsapp"},
  {url: "https://www.instagram.com/eubiancaalexia", label: "Me siga no instagram", icon: "instagram"}
]
