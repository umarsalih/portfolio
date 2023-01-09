import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";
import Mobile from './components/Mobile';

function App() {
    return (
        <div id="PortfolioApp" className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route exact path='/' element={< Home />}/>
                    <Route exact path='/mobile-designs' element={< Mobile />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
