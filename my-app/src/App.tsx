import './main.css';
import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage';
import StartPage from './pages/StartPage/StartPage';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SingleUserPage from './pages/SingleUserPage/SingleUserPage';
import SingleRepoPage from './pages/SingleRepoPage/SingleRepoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<StartPage />} /> */}
          <Route index element={<UserPage />} />
          <Route path="user/:id" element={<SingleUserPage />} />
          <Route path="/:id" element={<SingleRepoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
