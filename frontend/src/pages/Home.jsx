
import { Link } from "react-router-dom";
import {
    Bot,
    FileText,
    Mic,
    BarChart3,
    ArrowRight,
    CheckCircle
} from "lucide-react";

function Home() {
    return (
        <div className="home-page" id="home">

            {/* Hero Section */}
            <section className="hero">

                <div className="hero-content">

                    <span className="hero-tag">
                        AI POWERED INTERVIEW PREPARATION
                    </span>

                    <h1>
                        Your Personal AI
                        <span> Interview Coach</span>
                    </h1>

                    <p>
                        Practice interviews, analyze your resume
                        and improve your confidence with your
                        personal AI interviewer.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/register" className="primary-btn">
                            Start Your Free Interview
                            <ArrowRight size={18} />
                        </Link>

                        <a href="#features" className="secondary-btn">
                            Explore Features
                        </a>
                    </div>

                    <div className="hero-points">
                        <span>
                            <CheckCircle size={16} />
                            AI-powered practice
                        </span>

                        <span>
                            <CheckCircle size={16} />
                            Personalized feedback
                        </span>
                    </div>

                </div>

                {/* AI Interviewer Preview */}
                <div className="hero-visual">

                    <div className="ai-card">

                        <div className="ai-avatar">
                            <Bot size={76} />
                        </div>

                        <h3>Meet Your AI Interviewer</h3>

                        <p>
                            Hello! I'm your personal interview coach.
                            Ready to practice?
                        </p>

                        <div className="voice-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <small>AI Interviewer is ready</small>

                    </div>

                </div>

            </section>

            {/* Features Section */}
            <section className="features" id="features">

                <div className="section-heading">
                    <span>OUR FEATURES</span>
                    <h2>Everything You Need to Ace Interviews</h2>
                    <p>
                        Prepare smarter with intelligent
                        interview preparation tools.
                    </p>
                </div>

                <div className="feature-grid">

                    <div className="feature-card">
                        <Bot />
                        <h3>AI Mock Interviews</h3>
                        <p>
                            Practice realistic interviews
                            with your AI interviewer.
                        </p>
                    </div>

                    <div className="feature-card">
                        <FileText />
                        <h3>Resume Analysis</h3>
                        <p>
                            Upload your resume and discover
                            areas where you can improve.
                        </p>
                    </div>

                    <div className="feature-card">
                        <Mic />
                        <h3>Voice Conversations</h3>
                        <p>
                            Talk naturally with your AI
                            interviewer using your microphone.
                        </p>
                    </div>

                    <div className="feature-card">
                        <BarChart3 />
                        <h3>Performance Analysis</h3>
                        <p>
                            Understand your strengths and
                            weaknesses after every interview.
                        </p>
                    </div>
                    <div className="feature-card">
                        <CheckCircle />
                        <h3>Job Description Matcher</h3>
                        <p>
                            Match your skills with job descriptions
                            for better opportunities.
                        </p>
                    </div>

                </div>

            </section>

            {/* How It Works */}
            <section className="how-it-works" id="how-it-works">

                <div className="section-heading">
                    <span>GET STARTED</span>
                    <h2>Your Preparation in Three Steps</h2>
                </div>

                <div className="steps-grid">

                    <div className="step-card">
                        <h3>01. Upload Resume</h3>
                        <p>
                            Upload your resume so AI can
                            understand your skills and experience.
                        </p>
                    </div>

                    <div className="step-card">
                        <h3>02. Start Interview</h3>
                        <p>
                            Talk to your AI interviewer and
                            answer personalized questions.
                        </p>
                    </div>

                    <div className="step-card">
                        <h3>03. Get Feedback</h3>
                        <p>
                            Receive detailed analysis and
                            improve your interview performance.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;
