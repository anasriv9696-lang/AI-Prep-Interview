import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../services/auth.service.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function checkAuth() {
            try {
                const data = await getCurrentUser();
                setUser(data.user || data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        checkAuth();

    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}