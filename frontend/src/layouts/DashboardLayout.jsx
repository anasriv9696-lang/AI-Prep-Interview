import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import AIChatbot from "../components/AIChatbot";


function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <DashboardSidebar />

            <main className="dashboard-main">
                <header className="dashboard-topbar">
                    <h3>AI Prep Interview</h3>
                    <p>Welcome back!</p>
                </header>

                <div className="dashboard-content">
                    <Outlet />
                </div>
            </main>

            <AIChatbot />
        </div>
    );
}

export default DashboardLayout;