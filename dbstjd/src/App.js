import './App.css';
import { Main,Finres,Login} from './compo/index';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Main" element={<Main />} />
      </Routes>
      <Routes>
      <Route path="/Finres" element={<Finres />} />
      </Routes>
      <Routes>
      <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
