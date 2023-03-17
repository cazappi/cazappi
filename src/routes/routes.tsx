import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';

const AppRoutes = () => (
  <Routes>
    {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;