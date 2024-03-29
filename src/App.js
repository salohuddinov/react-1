import { Routes, Route } from "react-router-dom";
import './App.css';
import Store from "./pages/store/Store"
import Mac from "./pages/mac/Mac"
import Ipad from "./pages/ipad/Ipad"
import Phone from "./pages/phone/Phone"
import Watch from "./pages/watch/Watch"
import Vision from "./pages/vision/Vision"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/mac' element={<Mac />} />
        <Route path='/ipad' element={<Ipad />} />
        <Route path='/phone' element={<Phone />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/vision' element={<Vision />} />
      </Routes>
    </div>
  );
}

export default App;
