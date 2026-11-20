function AuthLayout({ children }) {
    return (
        <div className="auth-layout">
            <div className="auth-brand">
                <h1>PrepAI</h1>
                <p>Your personal AI interview preparation partner.</p>
            </div>

            <div className="auth-content">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;