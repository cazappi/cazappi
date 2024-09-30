import { Routes, Route } from "react-router-dom";
import Politica from "../pages/Politica";
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import ForgetPass from "../pages/ForgetPass";
import MailConfirmation from "../pages/MailConfirmation";
import EmailVerification from "../pages/EmailVerification";
import Advertising from "../pages/Advertising";
import ShopConditions from "../pages/ShopConditions";
import DadosBancariosRevisao from "../pages/DadosBancariosRevisao";
import DadosBancariosPreenchimento from "../pages/DadosBancariosPreenchimento";
import BankAccount from "../pages/BankAccount";
import SignUp from "../pages/SignUp";
import Register from "../pages/Register";
import GerenciarDadosCadastrais from "../pages/GerenciarDadosCadastrais";
import ResetPass from "../pages/PasswordReset";
import Unauthenticated from "../pages/Unauthenticated";
import PrivateRoute from "./private-route";
import HasShopVerificationRoute from "./ShopAndLog-route";
import UpdateShop from "../pages/UpdateShop";
import BagList from "../pages/BagList";
import BagWithDraw from "../pages/BagWithDraw";
import ProductView from "../pages/ProductView";
import MinhasConversasLojista from "../pages/MinhasConversasLojista";
import MinhaConversaLojista from "../pages/MinhaConversaLojista";
import MinhasConversasCliente from "../pages/MinhasConversasCliente";
import MinhaConversaCliente from "../pages/MinhaConversaCliente";
import RegisterProduct from "../pages/RegisterProduct";
import EditProduct from "../pages/EditProduct";
import BagPagment from "../pages/BagPagment";
import OrderHistoryClient from "../pages/OrderHistoryClient";
import OrderResume from "../pages/OrderResume";
import OrderResumeLojista from "../pages/OrderResumeLojista";
import PoliticaLojista from "../pages/PoliticaLojista";
import ShopkeeperConfig from "../pages/ShopkeeperConfig";
import ShopkeeperFinish from "../pages/ShopkeeperConfig/ShopkeeperFinish";
import ClientAddresses from "../pages/ClientAddresses";
import ClientAddAddress from "../pages/ClientAddresses/ClientAddAddress";
import ClientAddSpecificAddress from "../pages/ClientAddresses/ClientAddSpecificAddress";
import ProfileClient from "../pages/ProfileClient";
import ProfileLojista from "../pages/ProfileLojista";
import GerenciarDadosLojista from "../pages/GerenciarDadosLojista";
import ManageSubCategories from "../pages/ManageSubCategories";

const AppRoutes = () => (
  <>
    <Routes>
      {/* exemplo de rota: <Route path="/novaRota" element={<ArquivoImportado />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/MailConfirmation" element={<MailConfirmation />} />
      <Route path="/Politica" element={<Politica />} />
      <Route path="/PoliticaLojista" element={<PoliticaLojista />} />
      <Route path="/register" element={<Register />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ProductView" element={<ProductView />} />
      <Route path="/BagPagment" element={<BagPagment />} />
      <Route path="/OrderHistoryClient" element={<OrderHistoryClient />} />
      <Route path="/RegisterProduct" element={<RegisterProduct />} />
      <Route path="/EditProduct" element={<EditProduct />} />
      <Route path="/OrderResume" element={<OrderResume />} />
      <Route path="/OrderResumeLojista" element={<OrderResumeLojista />} />
      <Route path="/forgetPass" element={<ForgetPass />} />
      <Route path="/resetpass" element={<ResetPass />} />
      <Route path="/EmailVerification/:token" element={<EmailVerification />} />
      <Route path="/Advertising" element={<Advertising />} />
      <Route path="/ShopConditions" element={<ShopConditions />} />
      <Route path="/unauthorized" element={<Unauthenticated />} />
      <Route path="/BagList" element={<BagList />} />
      <Route path="/BagWithDraw" element={<BagWithDraw />} />
      <Route path="/DadosBancariosPreenchimento" element={<DadosBancariosPreenchimento />} />
      {/* vai ser privada (so logado) */}
      <Route path="/ProfileClient" element={<ProfileClient />} />
      <Route path="/ProfileLojista" element={<ProfileLojista />} />
      <Route path="/profileLojista/gerenciarProdutos/subcategorias" element={<ManageSubCategories />} />
      <Route path="/GerenciarDadosLojista" element={<GerenciarDadosLojista />} />
    </Routes>
    <PrivateRoute
      path="/shopkeeper/order-chats"
      element={<MinhasConversasLojista />}
    />
    <PrivateRoute
      path="/shopkeeper/order-chats/:chatId"
      element={<MinhaConversaLojista />}
    />

    <PrivateRoute path="/client/address/add" element={<ClientAddAddress />} />
    <PrivateRoute path="/client/address" element={<ClientAddresses />} />

    <PrivateRoute
      path="/client/order-chats"
      element={<MinhasConversasCliente />}
    />
    <PrivateRoute
      path="/client/order-chats/:chatId"
      element={<MinhaConversaCliente />}
    />

    <PrivateRoute path="/shopkeeper/config" element={<ShopkeeperConfig />} />
    <PrivateRoute path="/shopkeeper/finish" element={<ShopkeeperFinish />} />
    <PrivateRoute path="/GerenciarDadosCadastrais" element={<GerenciarDadosCadastrais />} />
    <PrivateRoute
      path="/DadosBancariosRevisao"
      element={<DadosBancariosRevisao />}
    />
    <PrivateRoute path="/updateshop" element={<UpdateShop />} />
    <PrivateRoute path="/BankAccount" element={<BankAccount />} />
  </>
);

export default AppRoutes;
