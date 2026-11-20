function FeatureCard({ title, description, icon: Icon }) {
    return (
        <div className="feature-card">
            <Icon size={28} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureCard;