import './main.css';
import { Routes, Route, Link } from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage';
import StartPage from './pages/StartPage/StartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <header>
        <Link to="/">start</Link>
        <Link to="/user">user</Link>
      </header>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
