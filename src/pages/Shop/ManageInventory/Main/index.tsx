import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import sanduiche from '../../../../assets/sanduiche.png';
import haha from '../../../../assets/Carousel2.png';
import { RiPencilFill } from "react-icons/ri";

const ShopManageInventoryMain = () => {
    const items = [
        { image: sanduiche, name: "Sanduiche", quantity: 2, id: 4 },
        { image: sanduiche, name: "Torta", quantity: 2, id: 4 },
        { image: haha, name: "Maçã", quantity: 2, id: 4 },
        { image: sanduiche, name: "Vitamina natural", quantity: 2, id: 4 },
        { image: sanduiche, name: "Suco de laranja", quantity: 2, id: 4 },
        { image: sanduiche, name: "Suco de laranja", quantity: 2, id: 4 },
    ]

    return (
        <div className="">
            <Header transparent={false}></Header>

            <div className="flex flex-col items-center justify-center gap-4 w-full h-fit mt-8">
                <div className="text-4xl text-PRIMARY text-center font-bold mb-8">
                    Gerenciar Estoque
                </div>

                <div className="border border-PRIMARY w-[80%]"></div>

                <div className="flex flex-col items-start w-[80%]">
                    <div className="flex flex-row items-center justify-center text-gray-600 text-lg gap-2">
                        <div>Gerenciar produtos</div>
                        <div>{">>"}</div>
                        <div className="font-bold">Gerenciar estoque</div>
                    </div>

                    <div className="flex flex-col items-center justify-center h-fit w-full gap-6 my-8">
                        {
                            items.map((item, index) => {
                                return (
                                    <div key={index} className="w-full flex h-20 flex-row items-center justify-center p-2 rounded-xl shadow-xl gap-4">
                                        <div className="w-[8%] bg-black h-full rounded-xl overflow-hidden flex items-center justify-center">
                                            <img src={item.image} alt="" className="object-cover" />
                                        </div>

                                        <div className="w-[90%] h-full flex flex-row items-start justify-between">
                                            <div className="flex flex-col items-start mt-1">
                                                <div className="font-bold">
                                                    {item.name}
                                                </div>
                                                <div>
                                                    {item.quantity} itens disponíveis
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center h-full">
                                                <a href={'/ShopManageInventoryEdit/' + item.id} className="p-2 rounded-full border border-PRIMARY">
                                                    <RiPencilFill className="text-PRIMARY"></RiPencilFill>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ShopManageInventoryMain;