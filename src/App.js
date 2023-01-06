import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";

function App() {
    return (
        <div id="PortfolioApp" className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route exact path='/' index element={< Home />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
