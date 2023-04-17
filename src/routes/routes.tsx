import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import MailConfirmation from '../pages/Desktop-4';
import Politica from '../pages/Politica';

const AppRoutes = () => (
  <Routes>
    {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
    <Route path="/MailConfirmation" element={<MailConfirmation />} />
    <Route path="/Politica" element={<Politica />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;