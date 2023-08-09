import { Routes, Route } from "react-router-dom";
import Politica from "../pages/Politica";
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import ForgetPass from "../pages/ForgetPass";
import MailConfirmation from "../pages/MailConfirmation";
import EmailVerification from "../pages/EmailVerification";
import Advertising from "../pages/Advertising";
import BusinessType from "../pages/BusinessType";
import ShopConditions from "../pages/ShopConditions";
import DadosBancariosRevisao from "../pages/DadosBancariosRevisao";
import DadosBancariosPreenchimento from "../pages/DadosBancariosPreenchimento";
import BankAccount from "../pages/BankAccount";
import SignUp from "../pages/SignUp";
import Register from "../pages/Register";
import TokenExemplo from "../pages/TokenExemplo";
import Profile from "../pages/Profile";
import RegisterShop from "../pages/RegisterShop";
import ResetPass from "../pages/PasswordReset";

const AppRoutes = () => (
  <Routes>
    {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/MailConfirmation" element={<MailConfirmation />} />
    <Route path="/Politica" element={<Politica />} />
    <Route path="/register" element={<Register />} />
    <Route path="/registershop" element={<RegisterShop />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/login" element={<Login />} />
    <Route path="/resetpass" element={<ResetPass />} />
    <Route path="/forgetPass" element={<ForgetPass />} />
    <Route path="/EmailVerification/:token" element={<EmailVerification />} />
    <Route path="/DadosBancariosRevisao" element={<DadosBancariosRevisao />} />
    <Route
      path="/DadosBancariosPreenchimento"
      element={<DadosBancariosPreenchimento />}
    />
    <Route path="/Advertising" element={<Advertising />} />
    <Route path="/BusinessType" element={<BusinessType />} />
    <Route path="/ShopConditions" element={<ShopConditions />} />
    <Route path="/BankAccount" element={<BankAccount />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/exemploToken" element={<TokenExemplo />} />
  </Routes>
);

export default AppRoutes;
