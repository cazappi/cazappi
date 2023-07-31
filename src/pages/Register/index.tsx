import React, { useState, useEffect, Children } from 'react';
import padariaImage from '../../assets/padariaImage.png';
import verdurasImage from '../../assets/verdurasImage.png';
import pizzaImage from '../../assets/pizzaImage.png';
import mercadoImage from '../../assets/mercadoImage.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel3 from '../../assets/Carousel3.png';
import Cadastro from '../../components/Cadastro/Cadastro';
import Plus from '../../assets/Plus.svg'
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { collapse } from '@material-tailwind/react';

const s_1 = "O Cazappi é uma empresa brasileira de tecnologia que oferece soluções de comércio de alimentos para que pessoas e empresas possam comprar, vender, pagar, anunciar e entregar produtos por meio da internet."
const s_6 = "O registro e a publicação de sua loja no Cazappi são gratuitos. A única cobrança é a comissão de 15% de cada pedido feito. Uma vez que sua loja, filiais e catálogo de produtos tenham sido configurados, você pode solicitar sua publicação. Depois de verificarmos se você atende a todos os requisitos, você pode começar a receber pedidos."
const s_7 = "Quando o cliente faz seu pedido é enviada uma notificação para sua loja com o número identificador do pedido. "
const s_8 = "Você poderá escolher se você entrega ou se o cliente retira."
const s_9 = "A fatura dos nossos serviços será emitida na sexta-feira de cada semana. Todas as quartas-feiras você receberá o total de suas vendas na(s) conta(s) bancária(s) que especificou na configuração de sua loja. O valor total do depósito será igual ao total das vendas realizadas em sua(s) loja(s) através do Cazappi menos a nossa comissão."
const s_10 = "Você poderá estabelecer a distância que você consegue atender em entrega."
const s_11 = "Todo e qualquer produto de alimento industrializado, bebida, artesanais, lanches, mercearia, etc.... "
const s_12 = "Pix, débito ou crédito."

const Register = () => {
  const videoURL = "https://www.youtube.com/embed/yLgbyeFHd6k";

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  }

  type Props = {
    className: string;
    children?: React.ReactNode;
  };

  const Animation = ({ children, className }: Props) => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
      if (inView) {
        control.start("visible");
      }
    }, [control, inView]);

    return (
      <motion.div className={className} ref={ref} variants={boxVariant} initial="hidden" animate={control}>
        {children}
      </motion.div>
    )
  }

  const [isCollapsed1, setIsCollapsed1] = useState(true)
  const ToggleCollapsible1 = () => {
    setIsCollapsed1(!isCollapsed1)
  }
  const [isCollapsed2, setIsCollapsed2] = useState(true)
  const ToggleCollapsible2 = () => {
    setIsCollapsed2(!isCollapsed2)
  }
  const [isCollapsed3, setIsCollapsed3] = useState(true)
  const ToggleCollapsible3 = () => {
    setIsCollapsed3(!isCollapsed3)
  }
  const [isCollapsed4, setIsCollapsed4] = useState(true)
  const ToggleCollapsible4 = () => {
    setIsCollapsed4(!isCollapsed4)
  }
  const [isCollapsed5, setIsCollapsed5] = useState(true)
  const ToggleCollapsible5 = () => {
    setIsCollapsed5(!isCollapsed5)
  }
  const [isCollapsed6, setIsCollapsed6] = useState(true)
  const ToggleCollapsible6 = () => {
    setIsCollapsed6(!isCollapsed6)
  }
  const [isCollapsed7, setIsCollapsed7] = useState(true)
  const ToggleCollapsible7 = () => {
    setIsCollapsed7(!isCollapsed7)
  }
  const [isCollapsed8, setIsCollapsed8] = useState(true)
  const ToggleCollapsible8 = () => {
    setIsCollapsed8(!isCollapsed8)
  }
  const [isCollapsed9, setIsCollapsed9] = useState(true)
  const ToggleCollapsible9 = () => {
    setIsCollapsed9(!isCollapsed9)
  }
  const [isCollapsed10, setIsCollapsed10] = useState(true)
  const ToggleCollapsible10 = () => {
    setIsCollapsed10(!isCollapsed10)
  }
  const [isCollapsed11, setIsCollapsed11] = useState(true)
  const ToggleCollapsible11 = () => {
    setIsCollapsed11(!isCollapsed11)
  }
  const [isCollapsed12, setIsCollapsed12] = useState(true)
  const ToggleCollapsible12 = () => {
    setIsCollapsed12(!isCollapsed12)
  }



  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}/>

      {/* ----------------------- Content ----------------------- */}
      {/* ------- Carousel ------- */}

      <div className="relative h-[70vh] md:h-[100vh] w-full" id="section3">
        <img
          src={Carousel3}
          alt="3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 justify-between flex flex-row h-full w-full bg-gradient-to-r pt-8 from-BLACK/70 to-BLACK/5 px-10">
          <div className="text-WHITE">
            <div className="text-4xl text-left mb-20">
              Alcance o sucesso pessoal<br />e profissional vendendo<br />os seus produtos
            </div>
            <div className="text-left text-5xl italic">Cadastre-se já!</div>
          </div>


          <Cadastro></Cadastro>
        </div>
      </div>
      {/* ------- Second section ------- */}

      <div className="flex flex-col items-center justify-center mb-24 w-full p-2">
        <Animation className="w-full md:w-2/3 flex flex-col justify-center items-center my-24  text-center">
          <div className="flex flex-col justify-center w-2/3">
            <Animation className='p-2 w-2/3 text-center text-BLACK bg-YELLOW rounded-2xl font-medium text-xl md:text-3xl'>Cadastre e tenha</Animation>
            <Animation className='p-2 ml-5 text-BLACK text-center bg-YELLOW rounded-2xl text-base md:text-xl'>a maior plataforma on-line de vendas</Animation>
          </div>
        </Animation>
        <Animation className="w-4/5 flex flex-col md:flex-row items-center justify-between">
          <Animation className="w-64 h-64 my-4 md:my-0 border p-2 shadow-lg flex flex-col items-center"> 
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-1/2 bg-BLACK" />
            <div className="text-center h-1/2 flex items-center justify-center">Fica a sua escolha<br />entregar ou o cliente retira</div>
          </Animation>
          <Animation className="w-64 h-64 my-4 md:my-0 border p-2 shadow-lg flex flex-col items-center">
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-1/2 bg-BLACK" />
            <div className="text-center h-1/2 flex items-center justify-center">Crie e realize, suas vendas<br />irão crescer com o Cazzapi</div>
          </Animation>
          <Animation className="w-64 h-64 my-4 md:my-0 border p-2 shadow-lg flex flex-col items-center">
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-1/2 bg-BLACK" />
            <div className="text-center h-1/2 flex items-center justify-center">Liberdade financeira,<br />satisfação e motivação<br />você só encontra aqui</div>
          </Animation>
        </Animation>
      </div>


      <div className="flex justify-center">
        <span className='mx-4 text-xl md:text-3xl'>Como Funciona!</span>
      </div>

      {/* ------- fourth section ------- */}
      <div className='flex items-center justify-center'>
        <div className="container  mx-auto p-10 max-w-screen-lg bg-grey rounded-3xl">
          <div className='min-h-screen bg-FUNCTION rounded-3xl shadow p-12'>

            <div className="flex">
              <p className="my-5 font-semibold">O que é o Cazzapi?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible1}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed1 ? "" : s_1}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Como é a venda pelo Cazappi?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible2}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed2 ? "" : (<ol className=''>
              <li>1. Os clientes escolhem os produtos na sua loja no Cazappi;</li>
              <li>2. Te notificamos quando entra um novo pedido;</li>
              <li>3. Você prepara ou separa o produto para ser entregue;</li>
              <li>4. Toda semana você recebe o dinheiro de seus pedidos</li>
            </ol>)}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Como é o processo de se cadastrar no Cazappi?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible3}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed3 ? "" : (<ol className=''>
              <li>1. Rápido e fácil: você pode se inscrever em minutos. Preencha os seus dados, e cadastre seu negócio no cazappi;</li>
              <li>2. Analisaremos sua inscrição e verificaremos as informações que você nos enviou;</li>
              <li>3. Assim que sua inscrição for aprovada, você receberá um link para configurar sua loja, filiais, produtos, personalizar sua marca e ter acesso a ferramentas de gestão;</li>
              <li>4. Solicite a publicação de sua loja. Se atender às configurações corretas, você será notificado de que já está visível no aplicativo. Os clientes agora podem começar a pedir seus produtos.</li>
            </ol>)}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Quais requisitos para loja ser publicada no Cazappi?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible4}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed4 ? "" : (<ol className=''>
              <li>1. Tenha sua própria loja onde você pode receber compradores, pontos de retirada, pontos de venda em outra loja e armazéns com retirada;</li>
              <li>2. Comprometa-se a manter o catálogo da loja atualizado com fotos e preços, bem como a disponibilidade dos produtos para que o found-rate semanal (percentual de produtos encontrados em relação aos pedidos) se mantenha acima de 85%;</li>
              <li>3. Ofereça os produtos que você vende na Cazappi pelo mesmo preço da sua loja;</li>
              <li>4. Ter uma conta bancária em nome da empresa ou representante legal da empresa;</li>
              <li>5. Estar disposto a entregar um serviço de qualidade ao cliente;</li>
              <li>6. É obrigatório que a loja emita Nota Fiscal e que a entregue para o Shopper no momento da compra.</li>
            </ol>)}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Por que eu deveria estar no cazappi?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible5}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed5 ? "" : (<ol className=''>
              <li>1. Você dará aos seus clientes um atendimento único e personalizado na hora que eles precisarem;</li>
              <li>2. Daremos a você as ferramentas para gerenciar seus produtos e filiais e ajudá-lo a vender mais;</li>
              <li>3. Você descobrirá quais são os produtos mais solicitados e os que os clientes não estão encontrando.</li>
            </ol>)}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Quanto custa para publicar minha loja e quanto tempo posso demorar para vender?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible6}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed6 ? "" : s_6}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Como é processado o pedido?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible7}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed7 ? "" : s_7}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Como é feita a entrega do produto?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible8}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed8 ? "" : s_8}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Como e quanto eu recebo pelas minhas vendas?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible9}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed9 ? "" : s_9}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Qual a área de atuação que a minha loja poderá atingir?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible10}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed10 ? "" : s_10}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Quais produtos posso vender?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible11}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed11 ? "" : s_11}
            </p>
            <hr className='border-black' />

            <div className="flex">
              <p className="my-5 font-semibold">Quais formas de pagamentos são aceitas no Cazappi?</p>
              <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={ToggleCollapsible12}>
                <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
              </button>
            </div>
            <p className='my-5 font-italic text-BLACK'> {isCollapsed12 ? "" : s_12}
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>

  );
};

export default Register;