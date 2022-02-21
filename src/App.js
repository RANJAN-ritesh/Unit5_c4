import './App.css';
import { Navbar } from './components/navbar';
import {Routes,Route} from 'react-router-dom'
import { SearchPage } from './components/searchPage';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Navbar/>}></Route>
            <Route path={"/search"} element={<SearchPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
