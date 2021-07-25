import {MainContainer} from "../components/hoc/MainContainer";
import {Post} from "../components/post/Post";

export default function Feedback() {
    return (
        <MainContainer title="Tipser | Feedback">
            <span>
               <Post>Feedback: List</Post>
            </span>
        </MainContainer>
    )
}
