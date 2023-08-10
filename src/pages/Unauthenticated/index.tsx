import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Unauthenticated = () => {
  return (
    <div>
      <Header transparent={false} />

      <div className="w-full flex flex-col items-center justify-center my-14 space-y-20">
        <p>Para acessar nossos serviços você deve estar logado.</p>

        <a className="text-red-500 hover:text-red-700" href="/register">
          Caso não tenha conta, clique aqui para se cadastrar.
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Unauthenticated;
