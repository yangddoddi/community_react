
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Join } from '../pages/Join';
import { Login } from '../pages/Login';

export const routes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/posts/:id/write" element={<} />
            <Route path="/posts/:id" element={} />
            <Route path="/posts/all" element={} />
            <Route path="/posts/board" element={} />
            <Route path="/posts/notice" element={} />
        </Routes>
    )
}