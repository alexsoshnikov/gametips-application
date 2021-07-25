import classes from "../../styles/components/Post.module.scss";

export const Post = props => {
    return (
        <article className={classes.post}>
            {props.children}
        </article>
    )
}
