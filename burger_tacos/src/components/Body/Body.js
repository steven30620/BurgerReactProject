import '../../styles/BodyStyle/Body.scss';
import LogComponent from './LogComponent/LogComponent';
import { Routes, Route } from 'react-router-dom';

function Body() {
	//states

	//Comportement

	//affichage
	return (
		<div className="body">
			<Routes>
				<Route path="/" element={<LogComponent />} />
				<Route path="/home" element={<div>Menu principale</div>} />
			</Routes>
		</div>
	);
}

export default Body;
