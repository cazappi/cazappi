import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { Footer } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const TokenExemplo = () => {
  const navigate = useNavigate();
  const [sta, setSta] = useState("");
  const tokenFirebase = useSelector(
    (state: RootState) => state.auth.token_firebase
  );
  const tokenBackend = useSelector(
    (state: RootState) => state.auth.token_backend
  );

  function teste() {
    api.post("/token/set", {
      token_firebase: tokenFirebase,
    });
  }

  function testeWithMiddlewate() {
    api.post("/token/teste").then((response) => {
      setSta(response.data);
    });
  }

  return (
    <div>
      <div>
        <p>Página de exemplo para pegar o token</p>
        <p>Faça login primeiro, para colocar o token no Redux</p>
        <a href="/login" style={{ color: "red" }}>
          {" "}
          Fazer Login
        </a>
      </div>

      <p>Token Firebase: {tokenFirebase}</p>
      <p>Token Backend: {tokenBackend}</p>
      <div>
        <button onClick={teste}>Teste cookie token</button>
      </div>
      <button onClick={testeWithMiddlewate}>Teste sem middleware token</button>
      <p>{sta}</p>
    </div>
  );
};

export default TokenExemplo;
