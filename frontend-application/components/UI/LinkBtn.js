import classes from "../../styles/components/LinkBtn.module.scss";
import Link from "next/link";

export const LinkBtn = props => {
    const cls = [
        classes.LinkBtn,
        classes[props.linkTo === props.asPath ? 'isActive' : null],
        classes[props.isNotify]
    ]

    return (
        <li className="nav-item">
            <Link href={props.linkTo}>
                <a
                    className={cls.join(' ')}
                    tabIndex={props.tabIndex}
                >
                    {props.children}
                </a>
            </Link>
        </li>
    )
}