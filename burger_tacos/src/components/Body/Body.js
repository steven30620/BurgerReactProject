import 'BodyStyle/Body.scss';
import background from 'Assets/images/background.png';
import LogComponent from './LogComponent/LogComponent';
import { Routes, Route } from 'react-router-dom';
import ProductDisplayComponent from './ProductDisplay/ProductDisplayComponent';
function Body() {
	//states

	//Comportement

	//affichage
	return (
		<div className="body">
			<div className="body-banner">
				<img
					className="body-banner-background"
					src={background}
					alt="burger_illustration"
				/>
				<div className="body-banner-contact">
					Burger & Tacos <br /> Tel: 06.00.00.00.00
				</div>
			</div>
			<div className="body-placeholder">
				<Routes>
					<Route path="/" element={<ProductDisplayComponent />} />
					<Route path="/login" element={<LogComponent />} />
				</Routes>
			</div>
		</div>
	);
}

export default Body;
