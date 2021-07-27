import '../styles/globals.scss'
import {AppWrapper} from "../components/hoc/AppWrapper";
import {AuthState} from "../context/auth/state";

function Application({Component, pageProps}) {
    return (
        <AuthState>
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </AuthState>
    )
}

export default Application
