import { bebas_neue, roboto } from "../fonts";
import Styles from "./Hero.module.scss";

export function Hero(props: HeroProps) {
  return (
    <div className={Styles.heroContainer}>
      <div className={Styles.headingContainer}>
        <div>
          <h2 className={bebas_neue.className}>{props.name}</h2>
          <h6 className={roboto.className}>{props.slogan}</h6>
        </div>
        <p className={roboto.className}>{props.briefDescription}</p>
      </div>
    </div>
  );
}

interface HeroProps {
  name: string;
  slogan: string;
  briefDescription: string;
}
