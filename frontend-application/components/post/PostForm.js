import classes from "../../styles/components/Post.module.scss";
import {Post} from "./Post";

export const PostForm = ({title, children}) => (
    <Post>
        <div className={classes.postForm}>
            <h3>{title}</h3>
            {children}
        </div>
    </Post>
)
