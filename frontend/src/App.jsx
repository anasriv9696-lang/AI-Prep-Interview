import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import JobMatcher from "./pages/JobMatcher";
import CodingInterview from "./pages/CodingInterview";
import Reports from "./pages/Reports";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Navbar />
                        <Home />
                        <Footer />
                    </>
                }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
            />
           <Route element={<ProtectedRoute />}>
               <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/resume" element={<ResumeAnalyzer />} />
                <Route path="/job-matcher" element={<JobMatcher />} />
                <Route path="/coding" element={<CodingInterview />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
           </Route>
        </Routes>
    );
}

export default App;