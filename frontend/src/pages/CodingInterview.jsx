import { useState } from "react";

function CodingInterview() {
    const [code, setCode] = useState(
        "// Write your solution here"
    );

    const [language, setLanguage] = useState("java");

    function handleRun() {
        console.log("Language:", language);
        console.log("Code:", code);
    }

    return (
        <div>
            <h1>Coding Interview</h1>
            <p>Practice coding questions in an interview environment.</p>

            <div className="dashboard-section">
                <h3>Question</h3>
                <p>
                    Write a program to find the largest element
                    in an integer array.
                </p>
            </div>

            <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
            >
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="cpp">C++</option>
            </select>

            <textarea
                className="code-editor"
                rows="14"
                value={code}
                onChange={(event) => setCode(event.target.value)}
            />

            <button onClick={handleRun}>Submit Code</button>
        </div>
    );
}

export default CodingInterview;