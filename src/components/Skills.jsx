import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 70 },
      { name: 'JavaScript (ES6+)', level: 70 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Tailwind CSS & Bootstrap', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'REST APIs', level: 80 },
      { name: 'AI/ML', level: 80 },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: '🗄️',
    skills: [
      { name: 'MS SQL Server', level: 80 },
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 70 },
      { name: 'Docker', level: 80 },
      { name: 'Linux (Ubuntu)', level: 70 },
      { name: 'Claude Code', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Cursor', level: 90 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'FastAPI', color: '#339933' },
  { name: 'Streamlit', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MS SQL Server', color: '#336791' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Git', color: '#F05032' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'MY SQL', color: '#E10098' },
  { name: 'Machine Learning', color: '#DC382D' },
  { name: 'Deep Learning', color: '#b39b50ff' },
  { name: 'Natural Language Processing', color: '#51b7efff' },
  { name: 'Generative AI', color: '#f47f7fff' },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✦ Technical Skills</span>
          <h2 className="section-title">My Tech Arsenal</h2>
          <p className="section-subtitle">
            A curated toolkit of technologies I use to build modern, scalable applications from front to back.
          </p>
        </div>

        {/* Tech pill cloud */}
        <div className="tech-cloud">
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="tech-pill"
              style={{ '--tech-color': tech.color, '--delay': `${i * 0.05}s` }}
              id={`tech-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <span className="tech-dot" style={{ background: tech.color }} />
              {tech.name}
            </div>
          ))}
        </div>

        {/* Skill categories with bars */}
        <div className="skills-grid">
          {skillCategories.map(cat => (
            <div key={cat.title} className="skill-category glass-card">
              <div className="cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-title">{cat.title}</h3>
              </div>
              <div className="cat-skills">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ '--fill-width': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
