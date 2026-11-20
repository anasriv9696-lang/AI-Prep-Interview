import { useState } from "react";

function JobMatcher() {
    const [jobDescription, setJobDescription] = useState("");

    function handleMatch() {
        if (jobDescription.trim() === "") {
            alert("Please enter a job description.");
            return;
        }

        console.log("Job Description:", jobDescription);
    }

    return (
        <div>
            <h1>Job Description Matcher</h1>
            <p>Find out how well your skills match a job.</p>

            <div className="dashboard-section">
                <h3>Paste Job Description</h3>

                <textarea
                    rows="8"
                    value={jobDescription}
                    onChange={(event) =>
                        setJobDescription(event.target.value)
                    }
                    placeholder="Paste the complete job description here..."
                />

                <button onClick={handleMatch}>Analyze Match</button>
            </div>

            <div className="dashboard-section">
                <h2>Matching Results</h2>
                <p>Your matching skills will appear here.</p>
                <p>Missing skills will appear here.</p>
                <p>Recommended preparation topics will appear here.</p>
            </div>
        </div>
    );
}

export default JobMatcher;