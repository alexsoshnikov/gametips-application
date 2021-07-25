import classes from '../../styles/components/GameCategory.module.scss'
import Link from "next/link";
import Image from "next/image";

export const GameCategory = ({src, title}) => (
    <Link href={'/'}>
        <a className={classes.gameCategory}>
            <Image
                src={src}
                alt="Game"
                width={1920/8}
                height={1080/8}
            />
        </a>
    </Link>
)