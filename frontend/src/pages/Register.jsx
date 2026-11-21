import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { registerUser } from "../services/auth.service.js";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

async function handleRegister(event) {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    try {
        const userData = {
            name,
            email,
            password
        };

        const data = await registerUser(userData);

        setMessage(data.message);

        setName("");
        setEmail("");
        setPassword("");

    } catch (error) {
        setMessage(error.message);
    } finally {
        setLoading(false);
    }
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

                <button type="submit" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
                </button>
            </form>
            
              {message && <p>{message}</p>}

            <p>Already registered? <Link to="/login">Login</Link></p>
        </AuthLayout>
    );
}

export default Register;