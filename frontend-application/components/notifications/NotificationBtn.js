import classes from "../../styles/components/Notifications.module.scss"
import Link from "next/link";


export const NotificationBtn = () => {
    return (
        <div className={classes.notification}>
            <Link href={"/"}>
                <a className={classes.notificationBtn}>
                    <span className={classes.notificationBtnNumber}>3</span>
                    <svg viewBox="0 -1 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
                    </svg>
                </a>
            </Link>
        </div>
    )
}