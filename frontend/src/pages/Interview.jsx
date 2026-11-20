import { useState } from "react";

function Interview() {
    const [answer, setAnswer] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "AI",
            text: "Hello! Tell me about yourself."
        }
    ]);

    function handleSend() {
        if (answer.trim() === "") {
            return;
        }

        const newMessage = {
            sender: "You",
            text: answer
        };

        setMessages([...messages, newMessage]);
        setAnswer("");
    }

    return (
        <div>
            <h1>AI Mock Interview</h1>
            <p>Practice your interview with PrepAI.</p>

            <div className="interview-window">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <strong>{message.sender}: </strong>
                        {message.text}
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    placeholder="Type your answer..."
                />

                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default Interview;