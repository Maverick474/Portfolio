import './Education.css';

const education = [
  {
    id: 'edu-bs',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Forman Christian College University (FCCU)',
    location: 'Lahore, Pakistan',
    period: '2021 – 2025',
    grade: 'CGPA: 3.2 / 4.0',
    icon: '🎓',
    color: '#7c3aed',
    highlights: [
      'Major in Computer Science with electives in AI & Machine Learning.',
      'Graduated with Best Research FYP Award.',
      'Built DeepSight for my final year project, a deepfake detection system.',
    ],
    tags: ['CS', 'AI/ML', 'Data Structures', 'Algorithms', 'Databases'],
  },
  {
    id: 'edu-fsc',
    degree: 'A Levels',
    institution: 'Beaconhouse School System',
    location: 'Lahore, Pakistan',
    period: '2018 - 2020',
    grade: 'B, B, B',
    icon: '🏫',
    color: '#06b6d4',
    highlights: [
      'Attended classes for Pre-Engineering.',
    ],
    tags: ['Mathematics', 'Physics', 'Chemistry'],
  },
];



export default function Education() {
  return (
    <section id="education" className="section edu-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✦ Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and the foundation that drives my passion for technology.
          </p>
        </div>

        {/* Degrees */}
        <div className="edu-cards">
          {education.map(edu => (
            <div key={edu.id} id={edu.id} className="edu-card glass-card">
              <div className="edu-top">
                <div className="edu-icon" style={{ background: `${edu.color}20`, color: edu.color }}>
                  {edu.icon}
                </div>
                <div className="edu-info">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    {edu.institution}
                  </p>
                  <div className="edu-meta-row">
                    <span className="edu-period">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {edu.period}
                    </span>
                    <span className="edu-location">📍 {edu.location}</span>
                    <span className="edu-grade" style={{ color: edu.color }}>💻 {edu.grade}</span>
                  </div>
                </div>
              </div>

              <ul className="edu-highlights">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="edu-highlight">
                    <span className="edu-check" style={{ color: edu.color }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="edu-tags">
                {edu.tags.map(t => (
                  <span key={t} className="edu-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
