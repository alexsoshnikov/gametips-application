import classes from "../../styles/components/Button.module.scss";

export const Button = props => {
    const cls = [classes.button];

    return (
        <div className={cls.join(' ')}>
            <button
                onClick={props.onClick}
                disabled={props.disabled}
                type={props.type}
            >
                {props.children}
            </button>
        </div>
    )
}
