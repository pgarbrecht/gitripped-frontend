import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';

const RedirectHome = () => {
    const navigate = useNavigate();
  
    const navigateHome = () => {
      // 👇️ navigate to /
      navigate('/');
    };
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <Router>
        <App />
    </Router>
//   </React.StrictMode>
);

export default RedirectHome