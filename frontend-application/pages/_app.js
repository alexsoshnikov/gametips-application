import '../styles/globals.scss'
import {AuthState} from "../context/auth/state";

function Application({ Component, pageProps }) {
  return (
      <AuthState>
        <Component {...pageProps} />
      </AuthState>
  )
}

export default Application
