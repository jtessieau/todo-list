import Navbar from '../components/shared/Navbar';

function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newUser = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            passwordConfirmation: formData.get('passwordConfirmation'),
        };

        console.log(newUser);
    };

    return (
        <>
            <Navbar />
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <label>
                    Confirm password:
                    <input type="password" name="passwordConfirmation" />
                </label>

                <button type="submit">Register</button>
            </form>
        </>
    );
}
export default Register;
