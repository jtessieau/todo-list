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

            <div class="container">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" class="form-label">
                            Name:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" class="form-label">
                            Email:
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" class="form-label">
                            Password:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="passwordConfirmation"
                            class="form-label"
                        >
                            Confirm password:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="passwordConfirmation"
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
}
export default Register;
