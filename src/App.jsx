import { useEffect } from "react";

const quickStats = [
  { value: "4+", label: "Years of experience" },
  { value: "45%", label: "Lower dashboard latency" },
  { value: "40%", label: "Fewer reporting defects" },
  { value: "95%", label: "ML model accuracy" },
];

const specialties = [
  "Data Engineering",
  "Analytics Engineering",
  "Databricks",
  "Snowflake",
  "SQL & Python",
  "Data Quality",
];

const experience = [
  {
    role: "Data Analytics Engineer",
    company: "Wesco International, USA",
    period: "Jan 2025 - Present",
    highlight: "45%",
    highlightLabel: "Query performance boost",
    summary:
      "At Wesco, I design scalable ETL and analytics workflows using SQL, Python, Databricks, and cloud data platforms to move raw operational data into validated, analytics-ready datasets. My work focuses on reliable modeling, automated quality checks, and faster reporting for sales, inventory, logistics, and planning use cases.",
    detail:
      "I build reusable transformation pipelines, optimize query performance, and support forecasting and KPI reporting with governed data structures that are easier for analysts and business teams to trust and reuse.",
    tags: ["Databricks", "SQL", "Python", "Snowflake", "Great Expectations", "Power BI"],
  },
  {
    role: "Data Engineer / Data Analyst",
    company: "Persistent Systems, India",
    period: "Jan 2022 - Dec 2023",
    highlight: "30%",
    highlightLabel: "Less manual reporting effort",
    summary:
      "At Persistent Systems, I worked on SQL-driven ETL and analytics pipelines for marketing, media, and sales datasets used in attribution, campaign analysis, and unified measurement reporting. The role combined transformation logic, data validation, and scalable dataset design for high-volume analytics delivery.",
    detail:
      "I automated recurring ingestion and validation workflows with Python, created harmonized analytical datasets, and improved processing efficiency for large reporting pipelines while supporting Tableau-based business insights.",
    tags: ["ETL", "Python", "SQL", "Marketing Analytics", "Tableau", "Attribution"],
  },
  {
    role: "Junior Data Engineer",
    company: "TCS, India",
    period: "Jun 2021 - Dec 2022",
    highlight: "QA",
    highlightLabel: "Validation-first delivery",
    summary:
      "At TCS, I supported data extraction, transformation, and reconciliation workflows for operational and campaign reporting. This experience strengthened my foundation in data cleaning, metric consistency, and the discipline required to deliver dependable BI-ready datasets.",
    detail:
      "I contributed Python-based cleaning scripts, supported reporting pipelines for Power BI and Tableau, and documented validation and transformation logic so analytics workflows remained stable and repeatable.",
    tags: ["Python", "SQL", "Power BI", "Tableau", "Data Quality"],
  },
];

const projects = [
  {
    title: "Customer Complaints Resolution Dashboard",
    period: "Jan 2025 - May 2025",
    text: "Developed an ML-powered issue classification workflow and Power BI dashboard to improve service visibility, reduce escalations, and support faster resolution decisions.",
    meta: "95% Accuracy",
    stack: ["Python", "Power BI", "DAX", "ML"],
  },
  {
    title: "Predicting Heart Disease Risk",
    period: "May 2024 - Jul 2024",
    text: "Built predictive models using feature engineering, Logistic Regression, and SVC to improve heart disease risk classification on imbalanced healthcare data.",
    meta: "ML Modeling",
    stack: ["Python", "Logistic Regression", "SVC", "Sklearn"],
  },
  {
    title: "Cardiovascular & Sleep Health Analysis",
    period: "Jan 2024 - May 2024",
    text: "Analyzed health and sleep datasets to identify relationships between physical activity, sleep quality, and cardiovascular indicators through EDA and visualization.",
    meta: "EDA + Insights",
    stack: ["Python", "SQL", "EDA", "Visualization"],
  },
  {
    title: "Short-Term Electrical Load Forecasting",
    period: "Dec 2022 - Jun 2023",
    text: "Built an ANN-based forecasting model to support energy planning and achieve 3.14% MAPE for short-term electrical load prediction.",
    meta: "3.14% MAPE",
    stack: ["MATLAB", "ANN", "Forecasting"],
  },
];

const skillGroups = [
  {
    title: "Engineering",
    items: ["SQL", "Python", "ETL / ELT", "Airflow", "dbt-style transformations", "Data modeling"],
  },
  {
    title: "Platforms",
    items: ["Databricks", "Snowflake", "Azure Synapse", "AWS Redshift", "Azure SQL", "AWS"],
  },
  {
    title: "Quality",
    items: ["Great Expectations", "Validation frameworks", "Anomaly detection", "QA rules", "Documentation", "Data lineage"],
  },
  {
    title: "Analytics",
    items: ["Power BI", "Tableau", "Forecasting", "Experimentation", "Marketing analytics", "Excel"],
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
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    nodes.forEach((node, index) => {
      node.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          {"<Bhargav.data/>"}
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Data Engineer • Analytics Engineer • Databricks • Snowflake</p>
            <h1>
              I build scalable data systems for <span>clean analytics</span> and better decisions.
            </h1>
            <p className="hero-text">
              I’m Bhargav Kodaru, a data engineer focused on ETL pipelines, analytics
              engineering, cloud data platforms, and QA-first workflows that help teams trust
              their reporting, forecasting, and business insights.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Explore Experience
              </a>
              <a
                className="button button-secondary"
                href={`${import.meta.env.BASE_URL}Bhargav_Kodaru_Resume_Updated.docx`}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-wrap">
              <div className="portrait-glow"></div>
              <img
                className="portrait"
                src={`${import.meta.env.BASE_URL}bhargav-kodaru-profile.png`}
                alt="Bhargav Kodaru portrait"
              />
            </div>
          </div>
        </section>

        <section className="stats-band reveal">
          {quickStats.map((item) => (
            <article className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading reveal compact-heading">
            <p className="section-label">About</p>
            <h2>Modern data engineering with strong validation, performance, and business context.</h2>
          </div>

          <div className="about-layout">
            <article className="about-card reveal">
              <p>
                I specialize in designing SQL- and Python-driven data pipelines that transform raw
                business data into clean, reusable, analytics-ready assets. My recent work spans
                Databricks, Snowflake-style warehousing, cloud analytics ecosystems, and validation
                frameworks that improve trust in reporting and downstream decision-making.
              </p>
              <p>
                I enjoy building systems that are not only technically scalable, but also easier for
                analysts, stakeholders, and teams to understand and use. My focus is always on
                clear modeling, strong data quality, and measurable business impact.
              </p>
              <div className="pill-row">
                {specialties.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="section-label">Experience</p>
            <h2>Professional journey focused on <span>data platforms</span>, analytics, and quality.</h2>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card reveal" key={`${item.company}-${item.role}`}>
                <div className="experience-copy">
                  <h3>{item.role}</h3>
                  <p className="experience-meta">
                    {item.company} <span>{item.period}</span>
                  </p>
                  <p>{item.summary}</p>
                  <p>{item.detail}</p>
                  <div className="pill-row small-gap">
                    {item.tags.map((tag) => (
                      <span className="pill muted-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <aside className="experience-aside">
                  <strong>{item.highlight}</strong>
                  <span>{item.highlightLabel}</span>
                </aside>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="section-label">Projects</p>
            <h2>Selected work across BI, machine learning, healthcare analytics, and forecasting.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-top">
                  <span className="project-badge">Featured Project</span>
                  <span className="project-period">{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="pill-row small-gap">
                  {project.stack.map((item) => (
                    <span className="pill muted-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-meta">{project.meta}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading reveal">
            <p className="section-label">Skills</p>
            <h2>Technical capabilities across engineering, quality, warehousing, and business analytics.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="pill-row small-gap">
                  {group.items.map((item) => (
                    <span className="pill muted-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-card reveal" id="contact">
          <p className="section-label">Contact</p>
          <h2>Open to data engineering and analytics engineering opportunities.</h2>
          <p>
            If you’re hiring for roles in ETL, analytics engineering, BI, cloud data platforms,
            or data quality, I’d be glad to connect.
          </p>
          <div className="hero-actions centered-actions">
            <a className="button button-primary" href="mailto:bhargav.kodaru@gmail.com">
              bhargav.kodaru@gmail.com
            </a>
            <a className="button button-secondary" href="tel:+18605404423">
              +1 (860) 540-4423
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/bhargav-kodaru"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
