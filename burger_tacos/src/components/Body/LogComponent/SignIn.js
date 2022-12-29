export default function SignIn() {
	return (
		<form className="form form-signIn">
			<label className="form-label form-label-signIn">Email</label>
			<input
				className="form-input form-input-signIn"
				type="email"
				placeholder="test@test.test"
			></input>
			<label className="form-label form-label-signIn">Mot de passe</label>
			<input
				className="form-input form-input-signIn"
				type="password"
				placeholder="secret"
			></input>
		</form>
	);
}
