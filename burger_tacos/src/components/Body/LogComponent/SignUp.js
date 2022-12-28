export default function SignUp() {
	return (
		<form className="signUpForm">
			<label>Nom:</label>
			<input type="text" placeholder="alfred"></input>

			<label>Prénom: </label>
			<input type="text" placeholder="gusto"></input>

			<label>email: </label>
			<input type="email" placeholder="test@test.test"></input>

			<label>Mot de passe: </label>
			<input type="password" placeholder="secret  "></input>

			<label>confirmez votre mot de passe: </label>
			<input type="password" placeholder="secret"></input>
		</form>
	);
}
