import { useState } from "react";
import { Bot, X } from "lucide-react";

function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatbot">
            {isOpen && (
                <div className="chat-window">
                    <h3>PrepAI Assistant</h3>
                    <p>How can I help you prepare today?</p>
                    <input placeholder="Ask something..." />
                </div>
            )}

            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Bot />}
            </button>
        </div>
    );
}

export default AIChatbot;