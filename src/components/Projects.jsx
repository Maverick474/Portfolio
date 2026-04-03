import './Projects.css';

const projects = [
  {
    id: 'proj-deepsight',
    title: 'DeepSight',
    subtitle: 'Best Research Final Year Project',
    description: '89% accurate deepfake detection using CNN (ResNeXt-50) & LSTM, integrated into a full-stack app with React, FastAPI, Firebase, and a browser extension for real-time detection.',
    tags: ['CNN', 'ResNeXt-50', 'LSTM', 'React', 'FastAPI', 'Firebase'],
    github: 'https://github.com/Maverick474/DeepSight_FYP',
    color: '#7c3aed',
  },
  {
    id: 'proj-telecobot',
    title: 'Teleco Chat Bot',
    subtitle: null,
    description: 'Multi-agent telecom chatbot using RAG, LangGraph, and LangChain. Supports multilingual queries (English, Urdu, Arabic) with guardrails, memory, and containerized Docker deployment.',
    tags: ['LangChain', 'OpenAI', 'ChromaDB', 'LangGraph', 'FastAPI', 'Streamlit', 'Docker'],
    github: 'https://github.com/Maverick474/Teleco_ChatBot',
    color: '#06b6d4',
  },
  {
    id: 'proj-recsystem',
    title: 'Recommendation System',
    subtitle: null,
    description: 'SVD-based recommendation engine for predicting user purchases and visualizing future purchase trends using data science libraries.',
    tags: ['NumPy', 'Seaborn', 'Matplotlib', 'Scikit-learn', 'SVD'],
    github: 'https://github.com/Maverick474/Recommendation_System',
    color: '#f59e0b',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✦ Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications I've designed, built, and shipped — from idea to production.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(proj => (
            <div key={proj.id} id={proj.id} className="proj-card glass-card">
              <div className="proj-featured-badge">⭐ Featured</div>

              <div className="proj-card-top">
                <h3 className="proj-title">{proj.title}</h3>
                {proj.subtitle && <p className="proj-subtitle">{proj.subtitle}</p>}
              </div>

              <p className="proj-desc">{proj.description}</p>

              <div className="proj-tags">
                {proj.tags.map(t => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>

              <div className="proj-actions">
                <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link proj-link-live" id={`${proj.id}-github`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>

              <div className="proj-card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${proj.color}25, transparent 70%)` }} />
            </div>
          ))}
        </div>

        <div className="proj-more">
          <a href="https://github.com/maverick474" target="_blank" rel="noreferrer" className="btn-outline" id="view-all-github">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
