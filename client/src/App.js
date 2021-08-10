import {Layout} from "./hoc/layout/Layout";
import {AppRouter} from "./components/app-router/AppRouter";
import {Navigation} from "./components/navigation/Navigation";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Layout>
                <AppRouter/>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
