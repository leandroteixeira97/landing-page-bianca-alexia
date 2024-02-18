import Image from "next/image";
import Styles from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/../public/logo.png"
import { roboto } from "../fonts";

export function Navbar() {
  return (
    <div className={Styles.navbarContainer}>
        <div className={Styles.logoContainer}>
          <div className={roboto.className}>
            <span>Bianca</span> Alexia
          </div>
        </div>
      {/* <div className={Styles.menuContainer}>
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </div> */}
    </div>
  );
}
