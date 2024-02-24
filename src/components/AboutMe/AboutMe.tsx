import { bebas_neue, roboto } from "../fonts";
import Styles from "./AboutMe.module.scss";

export function AboutMe() {
  return (
    <div className={Styles.aboutMeContainer}>
      <h2 className={bebas_neue.className}>Sobre mim</h2>
      <div className={roboto.className}>
        <p>
          Olá, eu sou Bianca, uma <span>Gestora de Tráfego</span> dedicada a
          impulsionar a presença online da sua marca. Com uma paixão pelo
          marketing digital, acredito que o verdadeiro sucesso está na
          construção de conexões significativas com o público, transformando
          visitantes em defensores da sua marca.
        </p>
        <p>
          Minha abordagem se destaca pela personalização, adaptando cada
          estratégia às necessidades exclusivas de cada cliente. Ao ficar
          atualizado nas últimas tendências e inovações, busco constantemente
          maneiras de elevar o seu desempenho online. Minha missão é não apenas
          aumentar o tráfego,{" "}
          <span>
            mas criar experiências digitais envolventes e impactantes.
          </span>
        </p>
        <p>
          Se você procura uma parceira comprometida com resultados reais, estou
          aqui para colaborar. Vamos juntos explorar novas oportunidades e
          conduzir sua marca ao sucesso digital.{" "}
          <span>Estou animada para fazer parte da sua jornada online!</span>
        </p>
        <div className={Styles.signature}>
          <p>Bianca Alexia</p>
          <p>Gestora de Tráfego</p>
        </div>
      </div>
    </div>
  );
}
