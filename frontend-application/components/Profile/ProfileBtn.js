import Link from "next/link";
import classes from "../../styles/components/Profile.module.scss"
import Image from "next/image";

export const ProfileBtn = () => {
    return (
        <Link href={"/"} className={classes.profileBtn}>
            <a  className={classes.profileBtnImage}>
                <Image src='/Profile.jpg' alt='userAvatar'
                       width={'34'} height={'34'}/>
            </a>
        </Link>
    )
}