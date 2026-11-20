function Reports() {
    const reports = [
        { id: 1, topic: "Java Interview", score: "85%" },
        { id: 2, topic: "HR Interview", score: "78%" },
        { id: 3, topic: "DBMS Interview", score: "82%" }
    ];

    return (
        <div>
            <h1>Interview Reports</h1>
            <p>Review your previous interview performances.</p>

            <div className="report-list">
                {reports.map((report) => (
                    <div className="report-card" key={report.id}>
                        <h3>{report.topic}</h3>
                        <p>Score: {report.score}</p>
                        <button>View Report</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reports;