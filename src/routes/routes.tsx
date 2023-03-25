import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import MailConfirmation from '../pages/Desktop-4'
import SignUp from '../pages/SignUp'

const AppRoutes = () => (
  <Routes>
    {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
    <Route path="/MailConfirmation" element={<MailConfirmation />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;