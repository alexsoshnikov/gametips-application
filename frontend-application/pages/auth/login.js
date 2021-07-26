import {MainContainer} from "../../components/hoc/MainContainer";
import {Post} from "../../components/post/Post";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/auth/context";

export default function Creators() {
    const auth = useContext(AuthContext)

    useEffect(() => {
        console.log(auth)
    }, [auth])

    return (
        <MainContainer title="Tipser | Creators">
            <span>
               <Post>
                   <button onClick={()=> auth.login('alex@dura123.ru', '12345678')}>LOGIN</button>
               </Post>
            </span>
        </MainContainer>
    )
}
