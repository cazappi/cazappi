import React, { useEffect, useState } from "react";
import { Link, RouteProps, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";    
import ArrowBack from "../../assets/arrow_back.svg";
import PersonIcon from '@mui/icons-material/Person';
import StarRating from "../../components/StarRatings/StarRating";
import NavigateArrowBack from "../../components/ArrowBack/NavigateArrowBack";
import { getToken } from "../../utils/get-cookie";
import api from "../../services/api";
import Loading from "../../components/Loading/Loading";

interface Rating {
	createdAt: string;
	description: string;
	id: number;
	orderId: number;
	orderRating: number;
	serviceRating: number;
	userName: string;
}

//COMPONENTE DE AVALIAÇÃO DO USUARIO
//Se necessario em mais telas componentizar
const UserComment = (props: { rating: Rating }) => {
	return (
		<div className="flex flex-row items-center justify-between w-full mb-4 gap-4 border-t border-gray-600 pt-4">
			<div className="flex flex-row gap-4">
				<div className="flex flex-row gap-2">
					<div className="w-10 h-10 rounded-full border-[#909090] border border-solid flex items-center justify-center">
						<PersonIcon sx={{ fontSize: 32, color: "#909090" }}/>
					</div>
				</div>
				<div className="flex flex-col">
					<span className="text-black font-medium text-sm">{props.rating.userName}</span>
					<div className="flex flex-row gap-2">
						<span className="text-black text-xs">{props.rating.orderRating}</span> <StarRating rating={parseFloat(props.rating.orderRating.toString())} />
					</div>
					<span className="text-black text-xs">{props.rating.description}</span>
				</div>
			</div>

			<div className="flex flex-col self-end">
				<span className="text-black text-xs">{props.rating.createdAt}</span>
			</div>
		</div>
	)
}

//TELA DE AVALIAÇÕES
//OBS: falta fazer a passagem da tela anterior para essa passando os params
const ShopRatings = (params: RouteProps) => {
	const navigate = useNavigate();
	const { shopName, shopkeeperId } = useParams();
	const [ratingsData, setRatingsData] = useState<Rating[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [totalRatings, setTotalRatings] = useState(0);
	const [mediaRating, setMediaRating] = useState(0);
	const token = getToken();

	useEffect(() => {
		async function fetchRatings() {
			try {
				const response = await api.get(`/rating/${shopName}/${shopkeeperId}`);
				setAllInfo(response.data);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}

		fetchRatings();
	}, []);

	function setAllInfo(ratings: Rating[]) {
		setRatingsData(ratings);
		setTotalRatings(ratings.length);
		setMediaRating(ratings.reduce((acc: number, rating: Rating) => acc + rating.orderRating, 0) / ratings.length);
	}

	function formatRatingNumber(rating: number): string {
		return rating.toFixed(1);
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();
		
		return `${day}/${month}/${year}`;
	}

	if (loading) return <Loading />;

	return (
    <div className="flex flex-col min-h-screen">
      <Header transparent={false} />

      <main className="flex-1 px-[15%] text-sm">
				<NavigateArrowBack text="Voltar" />

				<div className="flex flex-col items-center justify-center text-black font-medium w-full mb-4 gap-2">
					<h1>Avaliações</h1>

					<div className="flex flex-col items-center mb-4">
						<span>{formatRatingNumber(mediaRating)}</span>
						<StarRating rating={mediaRating} />
					</div>

					<div className="">
						<span>{totalRatings} avaliações no total</span>
					</div>
				</div>

				{
					ratingsData?.map((rating) => (
						<UserComment 
							key={rating.id}
							rating={{
								...rating,
								createdAt: formatDate(rating.createdAt),
								orderRating: parseFloat(rating.orderRating.toString()),
								serviceRating: parseFloat(rating.serviceRating.toString())
							}} 
						/>
					))
				}
			</main>

      <Footer />
    </div>
  );
};

export default ShopRatings;
