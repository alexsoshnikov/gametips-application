import React from "react";
import classes from "./FeedPost.module.scss";


export const FeedPost = props => (
    <article className={classes.feedPost}>
        <span>{props.title}</span>
    </article>
)