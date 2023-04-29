import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import ForgetPass from "../pages/ForgetPass";
import MailConfirmation from "../pages/Desktop-4";
import EmailVerification from "../pages/EmailVerification";
import Advertising from "../pages/Advertising";
import BusinessType from "../pages/BusinessType";
import ShopConditions from "../pages/ShopConditions";
import BankAccount from "../pages/BankAccount";

const AppRoutes = () => (
  <Routes>
    {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
    <Route path="/MailConfirmation" element={<MailConfirmation />} />
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgetPass" element={<ForgetPass />} />
    <Route path="/EmailVerification" element={<EmailVerification />} />
    <Route path="/Advertising" element={<Advertising />} />
    <Route path="/BusinessType" element={<BusinessType />} />
    <Route path="/ShopConditions" element={<ShopConditions />} />
    <Route path="/BankAccount" element={<BankAccount />} />
  </Routes>
);

export default AppRoutes;
