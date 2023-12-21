import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './component/Menu';
import Home from './component/Home';
import Users from './component/Users';
import Pnf from './component/Pnf';
import Posts from './component/Posts';
import Comments from './component/Comments';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/users'} element={<Users />} />
        <Route path={'/posts'} element={<Posts/>} />
        <Route path={'/comments'} element={<Comments />} />
        <Route path={'/*'} element={<Pnf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
