import { Routes, Route } from 'react-router-dom';
import Shell from './components/Shell';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="work/:slug" element={<WorkPage />} />
        <Route path="cases/:slug" element={<WorkPage />} />
      </Route>
    </Routes>
  );
}
