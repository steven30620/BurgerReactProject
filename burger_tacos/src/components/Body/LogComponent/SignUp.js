export default function SignUp() {
	return (
		<form className="form form-signUp">
			<label className="form-label form-label-signUp">Nom:</label>
			<input
				className="form-input form-input-signUp"
				type="text"
				placeholder="alfred"
			></input>

			<label className="form-label form-label-signUp">Prénom: </label>
			<input
				className="form-input form-input-signUp"
				type="text"
				placeholder="gusto"
			></input>

			<label className="form-label form-label-signUp">email: </label>
			<input
				className="form-input form-input-signUp"
				type="email"
				placeholder="test@test.test"
			></input>

			<label className="form-label form-label-signUp">
				Mot de passe:{' '}
			</label>
			<input
				className="form-input form-input-signUp"
				type="password"
				placeholder="secret  "
			></input>

			<label className="form-label form-label-signUp">
				Confirmez votre mot de passe:{' '}
			</label>
			<input
				className="form-input form-input-signUp"
				type="password"
				placeholder="secret"
			></input>
		</form>
	);
}
