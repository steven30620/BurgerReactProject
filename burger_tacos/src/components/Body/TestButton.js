import { Link } from 'react-router-dom';
import '../../styles/HeaderStyle/TestButton.scss';

function Body() {
	//states

	//Comportement

	//affichage
	return (
		<div className="testButton">
			<Link to="/"> Home </Link>
			<Link to="/login"> Login </Link>
		</div>
	);
}

export default Body;
