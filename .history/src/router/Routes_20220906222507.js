
import { Route, Routes } from 'react-router-dom';

export const routes = () => {
    return (
        <Routes>
            <Route path="/*" element={} />
            <Route path="/login" element={} />
            <Route path="/join" element={} />
            <Route path="/posts/:id/write" element={} />
            <Route path="/posts/:id" element={} />
            <Route path="/posts/all" element={} />
            <Route path="/posts/board" element={} />
            <Route path="/posts/notice" element={} />
        </Routes>
    )
}