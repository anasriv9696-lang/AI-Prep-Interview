import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { loginUser,getCurrentUser } from "../services/auth.service.js";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const { setUser } = useAuth();
    const navigate = useNavigate();

    async function handleLogin(event) {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    try {
        const userData = {
            email,
            password
        };

        await loginUser(userData);

        const data = await getCurrentUser();

        setUser(data.user || data);

        navigate("/dashboard");

    } catch (error) {
        setMessage(error.message);
    } finally {
        setLoading(false);
    }
}

    return (
        <AuthLayout>
            <h2>Welcome Back!</h2>
            <p>Login to your account</p>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <Link to="/forgot-password">Forgot Password?</Link>

                <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            {message && <p>{message}</p>}

            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </AuthLayout>
    );
}

export default Login;