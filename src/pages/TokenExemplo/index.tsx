import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { useState } from "react";
import api from "../../services/api";

const TokenExemplo = () => {
  const [sta, setSta] = useState("");
  const tokenFirebase = useSelector(
    (state: RootState) => state.auth.token_firebase
  );
  const tokenBackend = useSelector(
    (state: RootState) => state.auth.token_backend
  );

  function teste() {
    api
      .post("/token/set", {
        token_firebase: tokenFirebase,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error();
      });
  }

  function testeWithMiddlewate() {
    api
      .post("/token/teste", undefined, {
        headers: {
          "Authorization": `${document.cookie.split("=")[1]}`,
        },
      })
      .then((response) => {
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
