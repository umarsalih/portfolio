import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";

function App() {
    return (
        <div id="PortfolioApp" className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={< Home />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
