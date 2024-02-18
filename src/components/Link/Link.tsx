import Styles from "./Link.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { roboto } from "../fonts";

export function Link(props: LinkProps) {
  return (
    <div className={Styles.linkContainer}>
      {props.icon && (
        <div className={Styles.iconContainer}>{LinkMap[props.icon]}</div>
      )}
      <a className={roboto.className} href={props.url}>
        {props.label}
      </a>
    </div>
  );
}

export interface LinkProps {
  url: string;
  label: string;
  icon?: "whatsapp" | "instagram" | "facebook" | "page";
}

const LinkMap = {
  whatsapp: <WhatsAppIcon fontSize="large" sx={{ color: "white" }} />,
  instagram: <InstagramIcon fontSize="large" sx={{ color: "white" }} />,
  facebook: <FacebookIcon fontSize="large" sx={{ color: "white" }} />,
  page: <TravelExploreIcon fontSize="large" sx={{ color: "white" }} />,
};
