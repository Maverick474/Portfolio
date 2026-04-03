import './Experience.css';

const experiences = [
  {
    id: 'exp-1',
    role: 'AI Intern',
    company: 'Systems Limited',
    period: 'Sep 2025 – Jan 2026',
    type: 'Internship',
    logo: '🤖',
    color: '#7c3aed',
    points: [
      'Designed and implemented Retrieval-Augmented Generation (RAG) pipelines with integrated AI guardrails to ensure safe, reliable, and context-aware model responses.',
      'Developed AI chatbot systems using FastAPI (backend) and Streamlit (frontend), incorporating advanced prompt engineering and optimized model workflows.',
      'Built agentic AI workflows using LangGraph, enabling structured multi-step reasoning, agent coordination, and automated task execution.',
      'Engineered and deployed scalable multi-agent AI systems using Docker, ensuring modular, containerized, and production-ready architectures.',
    ],
    skills: ['RAG', 'LangGraph', 'FastAPI', 'Streamlit', 'Docker', 'Prompt Engineering'],
  },
];

const typeColors = {
  Internship: { bg: 'rgba(16,185,129,0.15)', color: '#6ee7b7' },
};

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✦ Work History</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A timeline of my professional journey — building real products, solving real problems.
          </p>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="exp-item" id={exp.id}>
              {/* Timeline visual */}
              <div className="exp-line-col">
                <div className="exp-dot" style={{ background: exp.color, boxShadow: `0 0 16px ${exp.color}80` }}>
                  <span>{exp.logo}</span>
                </div>
                {i < experiences.length - 1 && <div className="exp-connector" />}
              </div>

              {/* Card */}
              <div className="exp-card glass-card">
                <div className="exp-card-top">
                  <div className="exp-meta">
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-period-row">
                      <span className="exp-period">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {exp.period}
                      </span>
                      <span
                        className="exp-type"
                        style={{ background: typeColors[exp.type].bg, color: typeColors[exp.type].color }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="exp-point">
                      <span className="exp-bullet" style={{ background: exp.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="exp-skills">
                  {exp.skills.map(s => (
                    <span key={s} className="exp-skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
