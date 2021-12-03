import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<SignIn/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
      </Routes>

    </Router>
  );
}

export default App;
