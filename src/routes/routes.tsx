import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Login from '../pages/Login/index'

const AppRoutes = () => (
  <Routes>
    {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;