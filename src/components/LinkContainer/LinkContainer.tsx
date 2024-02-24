import { Link, LinkProps } from "../Link/Link";
import { bebas_neue } from "../fonts";
import Styles from "./LinkContainer.module.scss";

export function LinkContainer(props: LinkContainerProps) {
  return (
    <div className={Styles.linkContainer}>
      {props.links.length && <h2 className={bebas_neue.className}>Links úteis</h2>}
      {props.links.map((link: LinkProps, index: number) => {
        return (
          <Link
            url={link.url}
            label={link.label}
            icon={link.icon}
            key={`icon_${index}`}
          />
        );
      })}
    </div>
  );
}

interface LinkContainerProps {
  links: LinkProps[];
}
