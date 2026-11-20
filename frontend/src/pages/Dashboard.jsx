import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Track your interview preparation progress.</p>

            <div className="stats-grid">
                <StatCard
                    title="Interviews Completed"
                    value="12"
                    description="Total practice sessions"
                />

                <StatCard
                    title="Average Score"
                    value="82%"
                    description="Across your interviews"
                />

                <StatCard
                    title="Hours Practiced"
                    value="18"
                    description="Total preparation time"
                />

                <StatCard
                    title="Skills Improved"
                    value="8"
                    description="Skills you've worked on"
                />
            </div>

            <div className="dashboard-section">
                <h2>Start Practicing</h2>

                <div className="action-grid">
                    <Link to="/interview">Start AI Interview</Link>
                    <Link to="/resume">Analyze Resume</Link>
                    <Link to="/job-matcher">Match Job Description</Link>
                    <Link to="/coding">Practice Coding</Link>
                </div>
            </div>

            <div className="dashboard-section">
                <h2>Recent Activity</h2>
                <p>Java Interview — Score: 85%</p>
                <p>HR Interview — Score: 78%</p>
                <p>DBMS Interview — Score: 82%</p>
            </div>
        </div>
    );
}

export default Dashboard;