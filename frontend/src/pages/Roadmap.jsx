function Roadmap() {
    const topics = [
        { id: 1, title: "Java Fundamentals", status: "Completed" },
        { id: 2, title: "Data Structures", status: "In Progress" },
        { id: 3, title: "DBMS", status: "Pending" },
        { id: 4, title: "Operating Systems", status: "Pending" },
        { id: 5, title: "Mock Interviews", status: "Pending" }
    ];

    return (
        <div>
            <h1>Your Preparation Roadmap</h1>
            <p>Follow your personalized learning plan.</p>

            {topics.map((topic) => (
                <div className="roadmap-card" key={topic.id}>
                    <h3>{topic.title}</h3>
                    <span>{topic.status}</span>
                </div>
            ))}
        </div>
    );
}

export default Roadmap;