import './main.css';
import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage';
import StartPage from './pages/StartPage/StartPage';
import SinglePage from './pages/SinglePage/SinglePage';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="/:id" element={<SinglePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
