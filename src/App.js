import './App.css';
import SignUp from './SignUp';
import SignUpStep from './SignUpStep';
import Login from './Login'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import EmailVerification from './EmailVerification';
import ChangePassword from './ChangePassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/signupstep" element={<SignUpStep />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/emailverification" element={<EmailVerification/>} />
          <Route path="/changepassword" element={<ChangePassword/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
