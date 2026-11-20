
import { Link } from "react-router-dom";
import { Bot } from "lucide-react";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <Bot size={28} />
                <span>PrepAI</span>
            </div>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
            </div>

            <div className="nav-buttons">
                <Link to="/login" className="login-btn">
                    Login
                </Link>

                <Link to="/register" className="signup-btn">
                    Get Started
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;
