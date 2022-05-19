import './main.css';
import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage';
import StartPage from './pages/StartPage/StartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
