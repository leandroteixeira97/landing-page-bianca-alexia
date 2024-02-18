import {Navbar} from "@/components/Navbar/Navbar";
import Styles from "./layout.module.scss";
import {Footer} from "@/components/Footer/Footer";

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={Styles.layoutContainer}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
