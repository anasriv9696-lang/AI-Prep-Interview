import API_URL from "../config/api";

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
};

export const loginUser = async (userData) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
};

export const getCurrentUser = async () => {
    const response = await fetch(`${API_URL}/auth/me`, {
        method: "GET",
        credentials: "include"
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Authentication required");
    }

    return data;
};

export const logoutUser = async () => {
    const response = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include"
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Logout failed");
    }

    return data;
};