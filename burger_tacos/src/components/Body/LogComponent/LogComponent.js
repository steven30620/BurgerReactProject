import { useState } from 'react';
import '../../../styles/BodyStyle/LogComponentStyle/LogComponentStyle.scss';
import SignInComponent from './SignIn';
import SignUpComponent from './SignUp';

//state
function LogComponent() {
	const [components] = useState([<SignInComponent />, <SignUpComponent />]);
	const [activeComponent, setActiveComponent] = useState(components[0]);
	const [signInColor, setSignInColor] = useState({ background: '#f4f4f6' });
	const [signUpColor, setSignUpColor] = useState({ background: '#b6c5b9' });

	//comportement
	const swichToSignInComponent = () => {
		if (activeComponent === components[1]) {
			setActiveComponent(components[0]);
			setSignInColor({ background: '#f4f4f6' });
			setSignUpColor({ background: '#b6c5b9' });
		}
	};
	const swichToSignUpComponent = () => {
		if (activeComponent === components[0]) {
			setActiveComponent(components[1]);
			setSignInColor({ background: '#b6c5b9' });
			setSignUpColor({ background: '#f4f4f6' });
		}
	};
	//affichage

	return (
		<div className="logComponent">
			<div className="logComponent-header">
				<div
					onClick={swichToSignInComponent}
					className="logComponent-header-selection logComponent-header-selection-signIn"
					style={signInColor}
				>
					connexion
				</div>
				<div className="logComponent-header-border"></div>
				<div
					onClick={swichToSignUpComponent}
					className="logComponent-header-selection logComponent-header-selection-signUp"
					style={signUpColor}
				>
					inscription
				</div>
			</div>
			<div className="logComponent-body">
				<div>{activeComponent}</div>
			</div>
			<div className="logComponent-footer">
				<button>Action</button>
			</div>
		</div>
	);
}

export default LogComponent;
