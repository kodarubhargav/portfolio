import { useEffect } from "react";

const metrics = [
  { value: "4+", label: "years in data engineering and analytics" },
  { value: "45%", label: "pipeline latency reduction at Wesco" },
  { value: "30%", label: "processing efficiency improvement at Persistent" },
  { value: "95%", label: "ML classification accuracy on customer issues" },
];

const experience = [
  {
    period: "Feb 2025 - Present",
    company: "Wesco International, USA",
    role: "Data Analytics Engineer",
    summary:
      "Leading scalable ETL design, logical data modeling, data quality automation, and governance-aware pipeline delivery.",
    bullets: [
      "Designed ETL pipelines with SQL, Python, and Databricks for large-scale datasets.",
      "Built validation frameworks that improved data accuracy by 35%.",
      "Optimized queries and workflows to reduce latency by 45%.",
      "Integrated Unity Catalog for secure access, lineage, and governance.",
    ],
  },
  {
    period: "Jan 2022 - Dec 2023",
    company: "Persistent Systems, India",
    role: "Data Engineer / Data Analyst",
    summary:
      "Delivered healthcare-focused ETL pipelines and analysis-ready datasets across claims, EHR, and provider/member domains.",
    bullets: [
      "Developed reusable healthcare datasets for clinical analytics and reporting.",
      "Applied data modeling and transformation design across integrated systems.",
      "Enforced validation and HIPAA-aligned quality controls.",
      "Improved SQL and transformation efficiency by 30%.",
    ],
  },
  {
    period: "Jun 2021 - Dec 2021",
    company: "TCS, India",
    role: "Junior Data Engineer",
    summary:
      "Supported SQL extraction, data cleaning, QA workflows, and analytics pipelines powering BI reporting.",
    bullets: [
      "Built data cleaning scripts in Python for campaign and performance data.",
      "Ran quality checks and reconciliations before reporting handoff.",
      "Supported Power BI and Tableau analytics pipelines with reliable metrics.",
    ],
  },
];

const projects = [
  {
    period: "Jan 2025 - May 2025",
    title: "Customer Complaints Resolution Dashboard",
    summary:
      "Combined machine learning with business intelligence to improve issue triage and service performance visibility.",
    bullets: [
      "Built an ML-based issue classification system with 95% accuracy.",
      "Developed Power BI dashboards with DAX and Power Query.",
      "Reduced escalations by 22% and increased resolution rates by 18%.",
    ],
  },
  {
    period: "Jan 2024 - May 2024",
    title: "Cardiovascular & Sleep Health Data Analysis",
    summary:
      "Explored healthcare data patterns through Python, SQL, EDA, and visual storytelling to uncover heart health trends.",
    bullets: [
      "Processed and analyzed large health datasets using SQL and Python.",
      "Performed data cleaning, exploratory analysis, and visualization.",
      "Delivered insight-driven summaries around cardiovascular indicators.",
    ],
  },
];

const skills = [
  {
    title: "Data Engineering",
    text: "SQL, Python, PySpark, Databricks, Delta Lake, dbt, ETL/ELT pipelines",
  },
  {
    title: "Modeling & Architecture",
    text: "Logical data modeling, schema design, data integration, transformation design",
  },
  {
    title: "Cloud & Platforms",
    text: "Azure Data Factory, Synapse, Key Vault, AWS S3, AWS Glue, MLflow",
  },
  {
    title: "Analytics & BI",
    text: "Power BI, Tableau, Pandas, NumPy, R, SAS, statistical analysis workflows",
  },
  {
    title: "Healthcare Data",
    text: "Claims, EHR, provider/member data, HIPAA/PHI, FHIR/HL7",
  },
  {
    title: "Governance & Delivery",
    text: "Data lineage, metadata management, access control, GitHub Actions, Azure DevOps",
  },
];

const credentials = [
  {
    label: "Education",
    title: "Clark University",
    description: "Master of Science in Data Analytics",
    meta: "Worcester, MA | Jan 2024 - Dec 2025",
  },
  {
    label: "Education",
    title: "Sir Padampat Singhania University",
    description: "B.Tech in Computer Science",
    meta: "India | Aug 2018 - May 2022",
  },
  {
    label: "Publication",
    title: "Cryptocurrency Fluctuation Research",
    description:
      "Predicting and Enhancing the Fluctuations of Cryptocurrency using algorithms.",
    meta: "Research publication",
    href: "https://www.ijaresm.com/uploaded_files/document_file/Ayush_RaizadawDFH.pdf",
    linkText: "Open publication",
  },
  {
    label: "Certification",
    title: "Microsoft Azure Fundamentals",
    description: "AZ-900 credential validating cloud and Azure fundamentals.",
    meta: "Microsoft credential",
    href: "https://www.credly.com/badges/0428f7df-3bd6-413e-b886-c774c373623e/public_url",
    linkText: "View credential",
  },
];

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    nodes.forEach((node, index) => {
      node.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark"></span>
          <span>Bhargav Kodaru</span>
        </a>
        <nav className="nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Data Engineer | Data Modeling & Analytics</p>
            <h1>
              I build reliable data systems that turn messy pipelines into
              decision-ready products.
            </h1>
            <p className="hero-text">
              I&apos;m Bhargav Kodaru, a data engineer with 4+ years of
              experience across analytics engineering, ETL optimization,
              healthcare data, and cloud-based data platforms.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a
                className="button button-secondary"
                href={`${import.meta.env.BASE_URL}Bhargav_Kodaru_Resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
              <a
                className="button button-secondary"
                href="mailto:bhargav.kodaru@gmail.com"
              >
                Email Me
              </a>
            </div>
          </div>

          <aside className="hero-panel reveal">
            <div className="signal-card">
              <p className="signal-label">Current Focus</p>
              <h2>Scalable ETL, data quality, and analytics-ready models</h2>
              <ul className="signal-list">
                <li>
                  35% improvement in data accuracy through validation automation
                </li>
                <li>
                  45% lower pipeline latency through SQL and workflow
                  optimization
                </li>
                <li>
                  Hands-on delivery across Databricks, SQL, Python, Azure, and
                  AWS
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="metrics section reveal">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="section intro-grid">
          <div className="intro-card reveal">
            <p className="section-label">Profile</p>
            <h2>Designing data foundations that teams can trust</h2>
            <p>
              My work centers on building logical data models, scalable ETL
              pipelines, and governance-aware systems that make analytics more
              accurate, faster, and easier to use. I&apos;ve worked with
              healthcare, operational, and customer datasets, translating
              business needs into dependable technical solutions.
            </p>
          </div>

          <div className="intro-card intro-card-accent reveal">
            <p className="section-label">Based In</p>
            <h2>Houston, Texas</h2>
            <p>
              Open to roles where data engineering, analytics engineering, and
              business impact meet.
            </p>
            <div className="contact-strip">
              <a href="mailto:bhargav.kodaru@gmail.com">
                bhargav.kodaru@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/bhargav-kodaru"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="section-label">Experience</p>
            <h2>Building cleaner pipelines and stronger data products</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item reveal" key={item.role}>
                <div className="timeline-meta">
                  <p>{item.period}</p>
                  <span>{item.company}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p>{item.summary}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="section-label">Projects</p>
            <h2>Selected work from analytics and applied machine learning</h2>
          </div>

          <div className="cards-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <p className="project-date">{project.period}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading reveal">
            <p className="section-label">Capabilities</p>
            <h2>
              Technical strengths across engineering, analytics, and governance
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-block reveal" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials-grid">
          {credentials.map((credential) => (
            <article className="credential-card reveal" key={credential.title}>
              <p className="section-label">{credential.label}</p>
              <h2>{credential.title}</h2>
              <p>{credential.description}</p>
              <span>{credential.meta}</span>
              {credential.href ? (
                <a href={credential.href} target="_blank" rel="noreferrer">
                  {credential.linkText}
                </a>
              ) : null}
            </article>
          ))}
        </section>

        <section className="section contact-section reveal" id="contact">
          <p className="section-label">Let&apos;s Connect</p>
          <h2>Interested in building better data systems together?</h2>
          <p>
            I&apos;m looking for opportunities where I can contribute across
            data engineering, analytics engineering, and business-facing data
            products.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="mailto:bhargav.kodaru@gmail.com"
            >
              bhargav.kodaru@gmail.com
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/bhargav-kodaru"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
