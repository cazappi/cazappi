import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrow_back.svg";
import { useNavigate } from "react-router-dom";

export const NavigateArrowBack = (props: { text: string }) => {
    const navigate = useNavigate();

	return (
		<Link
            className="flex flex-row gap-2 items-center text-PRIMARY font-medium w-fit mb-4"
            onClick={() => navigate(-1)} to={""}>
                    <img src={ArrowBack} alt="Voltar" />
                    <span>{props.text}</span>
        </Link>
	);
};

export default NavigateArrowBack;
