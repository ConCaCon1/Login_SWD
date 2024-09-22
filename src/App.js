import './App.css';
import SignUp from './SignUp';
import SignUpStep from './SignUpStep';
import Login from './Login'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupstep" element={<SignUpStep />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
