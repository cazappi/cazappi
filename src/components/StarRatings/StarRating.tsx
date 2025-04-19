import { Box, Rating } from "@mui/material";
import { Star } from '@mui/icons-material';

interface StarRatingProps {
	rating?: number;
}  

const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }) => {
	return (
		<Box display="flex" gap="0.59rem" sx={{ width: 'fit-content' }}>
			<Rating
				name="customized-rating"
				value={rating}
				precision={0.1}
				readOnly
				emptyIcon={<Star fontSize="inherit" style={{ color: '#EEEEEE' }} />}
				icon={<Star fontSize="inherit" style={{ color: '#EB1212' }} />}
				sx={{
					fontSize: '1.125rem',
				}}
			/>
		</Box>
	);
};

export default StarRating;