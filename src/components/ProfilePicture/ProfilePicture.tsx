import Image from "next/image";
import Styles from "./ProfilePicture.module.scss";
import ProfilePictureImage from "../../../public/desktop-profile-picture.jpeg";

export function ProfilePicture() {
    return(
        <div className={Styles.profilePictureContainer}>
            <Image alt="Imagem de perfil" src={ProfilePictureImage}></Image>
        </div>
    );
}