import { Routes, Route } from "react-router-dom";

import Politica from '../pages/Politica';
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import ForgetPass from "../pages/ForgetPass";
import MailConfirmation from "../pages/Desktop-4";
import EmailVerification from "../pages/EmailVerification";
import Advertising from "../pages/Advertising";
import BusinessType from "../pages/BusinessType";
import ShopConditions from "../pages/ShopConditions";
import SignUp from "../pages/SignUp";

const AppRoutes = () => (
  <Routes>
    {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
    <Route path="/MailConfirmation" element={<MailConfirmation />} />
    <Route path="/Politica" element={<Politica />} />
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgetPass" element={<ForgetPass />} />
    <Route path="/EmailVerification" element={<EmailVerification />} />
    <Route path="/Advertising" element={<Advertising />} />
    <Route path="/BusinessType" element={<BusinessType />} />
    <Route path="/ShopConditions" element={<ShopConditions />} />
    <Route path="/SignUp" element={<SignUp />} />
  </Routes>
);

export default AppRoutes;
