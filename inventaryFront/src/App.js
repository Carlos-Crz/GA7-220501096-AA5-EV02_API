import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
        {/* Ruta para la página de Dashboard */}
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
