import './App.css';
import { Main} from './compo/index';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
