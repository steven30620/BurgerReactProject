import '../../../styles/BodyStyle/LogComponentStyle/LogComponentStyle.scss';
import SignInComponent from './SignIn';
import SignUpComponent from './SignUp';

function LogComponent() {
	return (
		<div className="logComponent">
			<div className="logComponent-header">
				<div className="logComponent-header-selection logComponent-header-selection-signIn">
					connexion
				</div>
				<div className="logComponent-header-border"></div>
				<div className="logComponent-header-selection logComponent-header-selection-signUp">
					inscription
				</div>
			</div>
			<div className="logComponent-body">
				<div>
					<SignInComponent />
				</div>
				<div>
					<SignUpComponent />
				</div>
			</div>
			<div className="logComponent-footer">
				<button>Action</button>
			</div>
		</div>
	);
}

export default LogComponent;
