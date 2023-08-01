import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { Helmet } from "react-helmet";
import { initializeApp } from "firebase/app";

// colocar esses dados de uma maneira mais segura, talvez em um .env
var firebaseConfig = {
  apiKey: "AIzaSyCcU5Dwl4_vX9JmQKYl4EdQa83M4NXdx4c",
  authDomain: "okeo-dev-371221.firebaseapp.com",
  projectId: "okeo-dev-371221",
  storageBucket: "okeo-dev-371221.appspot.com",
  messagingSenderId: "609367455735",
  appId: "1:609367455735:web:47559865c0f561ea3120f2",
  measurementId: "G-6171GK6W8H",
  // Outras configurações do Firebase, se houver
};
// Inicialize o Firebase
export const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
