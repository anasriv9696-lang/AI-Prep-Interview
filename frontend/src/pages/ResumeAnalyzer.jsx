import { useState } from "react";

function ResumeAnalyzer() {
    const [file, setFile] = useState(null);

    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    function handleUpload() {
        if (!file) {
            alert("Please select a resume first.");
            return;
        }

        alert("Selected file: " + file.name);
    }

    return (
        <div>
            <h1>Resume Analyzer</h1>
            <p>Upload your resume to get AI-powered feedback.</p>

            <div className="upload-box">
                <h3>Upload Your Resume</h3>

                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                />

                {file && <p>Selected: {file.name}</p>}

                <button onClick={handleUpload}>Analyze Resume</button>
            </div>

            <div className="dashboard-section">
                <h2>Analysis will include</h2>
                <ul>
                    <li>Resume score</li>
                    <li>Skills detected</li>
                    <li>Missing skills</li>
                    <li>ATS-style suggestions</li>
                    <li>Improvement recommendations</li>
                </ul>
            </div>
        </div>
    );
}

export default ResumeAnalyzer;