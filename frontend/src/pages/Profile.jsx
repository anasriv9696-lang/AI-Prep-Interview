import { useState } from "react";

function Profile() {
    const [name, setName] = useState("Student");
    const [email, setEmail] = useState("student@example.com");

    function handleSave(event) {
        event.preventDefault();

        console.log("Updated profile:", {
            name: name,
            email: email
        });
    }

    return (
        <div>
            <h1>My Profile</h1>
            <p>Manage your personal information.</p>

            <form className="profile-form" onSubmit={handleSave}>
                <label>Full Name</label>

                <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label>Email</label>

                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default Profile;