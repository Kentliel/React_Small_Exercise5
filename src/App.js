import './App.css';
import ComponentA from './components/ComponentA';
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/1' element={<Exercise1 />}/>
        <Route path='/2' element={<Exercise2 />}/>
        <Route path='/3' element={<Exercise3 />}/>
        <Route path='/4' element={<Exercise4 />}/>
      </Routes>
    </div>
  );
}

export default App;
