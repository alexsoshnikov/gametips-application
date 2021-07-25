import {MainContainer} from "../components/hoc/MainContainer";
import {Post} from "../components/post/Post";
import {FeedCategories} from "../components/UI/FeedCategories";

//https://codepen.io/TurkAysenur/pen/ZEpxeYm

export default function Feed() {
    const arr = new Array(100).fill('123')

    return (
        <MainContainer title="Tipser | Actual game tips">
            <>
                <FeedCategories/>
                {arr.map((item, index) => {
                    return (
                        <Post key={index}>{item}</Post>
                    )
                })}
            </>
        </MainContainer>
    )
}
