export default function SignUp() {
	return (
		<form className="signUpForm">
			<label for="firstName">Nom:</label>
			<input type="text" placeholder="alfred"></input>

			<label for="lastName">Prénom: </label>
			<input type="text" placeholder="gusto"></input>

			<label for="email">email: </label>
			<input type="email" placeholder="test@test.test"></input>

			<label for="email">Mot de passe: </label>
			<input type="password" placeholder="secret  "></input>

			<label for="password-confirm">confirmez votre mot de passe: </label>
			<input type="password" placeholder="secret"></input>
		</form>
	);
}
