import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
        <Route path="/" exact component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
