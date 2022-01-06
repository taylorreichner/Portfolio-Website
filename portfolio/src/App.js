import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './containers/welcomeContainer';
import About from './containers/aboutContainer';

function App() {

  return (
<div>
  <Router>
    <Routes>
      <Route exact path={'/'} element={<Welcome />}/>
      <Route exact path={'/about'} element={<About />} />
    </Routes>
  </Router>
  
</div>
  );
}

export default App;
