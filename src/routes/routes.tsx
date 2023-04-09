import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Login from '../pages/Login/index'
import ForgetPass from '../pages/ForgetPass';

const AppRoutes = () => (
  <Routes>
    {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgetPass" element={<ForgetPass />} />
  </Routes>
);

export default AppRoutes;