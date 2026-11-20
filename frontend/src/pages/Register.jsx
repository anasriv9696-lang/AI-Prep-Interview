import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleRegister(event) {
        event.preventDefault();

        console.log({
            name: name,
            email: email,
            password: password
        });
    }

    return (
        <AuthLayout>
            <h2>Create Account</h2>
            <p>Start preparing for your interviews</p>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Create password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <button type="submit">Create Account</button>
            </form>

            <p>Already registered? <Link to="/login">Login</Link></p>
        </AuthLayout>
    );
}

export default Register;