import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Mic,
    FileText,
    Briefcase,
    Code,
    BarChart3,
    Map,
    User
} from "lucide-react";

function DashboardSidebar() {
    return (
        <aside className="sidebar">
            <h2>PrepAI</h2>

            <nav>
                <NavLink to="/dashboard"><LayoutDashboard /> Dashboard</NavLink>
                <NavLink to="/interview"><Mic /> AI Interview</NavLink>
                <NavLink to="/resume"><FileText /> Resume Analyzer</NavLink>
                <NavLink to="/job-matcher"><Briefcase /> Job Matcher</NavLink>
                <NavLink to="/coding"><Code /> Coding Interview</NavLink>
                <NavLink to="/reports"><BarChart3 /> Reports</NavLink>
                <NavLink to="/roadmap"><Map /> Roadmap</NavLink>
                <NavLink to="/profile"><User /> Profile</NavLink>
            </nav>
        </aside>
    );
}

export default DashboardSidebar;