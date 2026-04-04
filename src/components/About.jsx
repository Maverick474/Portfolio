import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="about-img-wrap">
              <div className="about-img-bg" />
              <div className="about-img-inner">
                <div className="about-code-block">
                  <div className="code-header">
                    <span className="code-dot red" /><span className="code-dot yellow" /><span className="code-dot green" />
                    <span className="code-filename">about.js</span>
                  </div>
                  <div className="code-body">
                    <div className="code-line"><span className="c-keyword">const</span> <span className="c-var">developer</span> = {'{'}</div>
                    <div className="code-line indent"><span className="c-key">name</span>: <span className="c-str">"M.Zain Haseeb"</span>,</div>
                    <div className="code-line indent"><span className="c-key">role</span>: <span className="c-str">"Software Engineer"</span>,</div>
                    <div className="code-line indent"><span className="c-key">location</span>: <span className="c-str">"Pakistan 🇵🇰"</span>,</div>
                    <div className="code-line indent"><span className="c-key">passion</span>: <span className="c-str">"Building cool stuff"</span>,</div>
                    <div className="code-line indent"><span className="c-key">available</span>: <span className="c-bool">true</span>,</div>
                    <div className="code-line">{'}'};</div>
                    <br />
                    <div className="code-line"><span className="c-keyword">export default</span> developer;</div>
                  </div>
                </div>
              </div>
              <div className="about-float-badge">
                <span>💡</span>
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <span className="section-tag">✦ About Me</span>
            <h2 className="section-title">Crafting Digital Experiences That Matter</h2>
            <p className="about-desc" style={{ marginTop: '10px', marginBottom: '16px' }}>
              I am an enthusiastic and detail-oriented professional with a strong passion for problem-solving.
              With solid analytical abilities and a proven track record of meeting deadlines, I thrive in tackling
              complex challenges. I enjoy exploring new domains, particularly in web development and emerging
              technologies such as Machine learning and Generative AI. I was honored with the Best Research
              FYP Award for my final year project and have recently graduated from Forman Christian College University.
            </p>

            <div className="about-actions">
              <a
                href="/src/assets/M.ZainHaseeb_CV-2.pdf"
                download
                className="btn-primary"
                id="about-download-cv"
              >
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
              <a
                href="mailto:zainhaseeb474@gmail.com"
                className="btn-outline"
                id="about-email"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
