import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Password reset requested for:", email);
    }

    return (
        <AuthLayout>
            <h2>Forgot Password?</h2>
            <p>Enter your email to request a password reset.</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <button type="submit">Send Reset Link</button>
            </form>

            <Link to="/login">Back to Login</Link>
        </AuthLayout>
    );
}

export default ForgotPassword;