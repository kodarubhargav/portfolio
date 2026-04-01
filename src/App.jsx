import { useEffect } from "react";

const metrics = [
  { value: "4+", label: "years building analytics and data engineering systems" },
  { value: "45%", label: "faster dashboard and query response at Wesco" },
  { value: "40%", label: "reduction in reporting defects through QA automation" },
  { value: "95%", label: "classification accuracy on customer issue modeling" },
];

const aboutTags = [
  "SQL Data Engineering",
  "Snowflake & Warehousing",
  "Python Automation",
  "QA-First Pipelines",
  "Marketing & Media Analytics",
];

const experience = [
  {
    role: "Data Analytics Engineer",
    company: "Wesco International, USA",
    period: "Jan 2025 - Present",
    metric: "45%",
    metricLabel: "Query performance boost",
    summary:
      "At Wesco, I design SQL- and Python-based ETL workflows that ingest, transform, validate, and publish analytics-ready datasets across sales, inventory, and logistics domains. My work is centered on scalable cloud analytics patterns, reusable modeling, and strong QA so downstream reporting and forecasting remain consistent and trustworthy.",
    detail:
      "I also built Great Expectations validation frameworks, automated data harmonization pipelines, and optimized complex SQL models to reduce reporting defects by 40%, lower dashboard latency by 45%, and improve data preparation efficiency for business teams.",
    tags: ["Snowflake", "SQL", "Python", "Great Expectations", "Forecasting", "Power BI"],
  },
  {
    role: "Data Engineer / Data Analyst",
    company: "Persistent Systems, India",
    period: "Jan 2022 - Dec 2023",
    metric: "30%",
    metricLabel: "Manual effort reduced",
    summary:
      "At Persistent Systems, I engineered SQL-driven ETL and analytics pipelines for marketing, media spend, and sales datasets that supported attribution, campaign performance measurement, and unified analytics delivery. My role combined transformation design, validation discipline, and data modeling for high-volume reporting workflows.",
    detail:
      "I automated recurring Python ingestion processes, built harmonized analytical datasets for marketing teams, improved processing efficiency for large media datasets, and delivered validated Tableau-ready data structures that reduced reporting effort and improved scalability.",
    tags: ["Marketing Analytics", "ETL", "Python", "SQL", "Tableau", "Attribution"],
  },
  {
    role: "Junior Data Engineer",
    company: "TCS, India",
    period: "Jun 2021 - Dec 2022",
    metric: "QA",
    metricLabel: "Validation-first delivery",
    summary:
      "At TCS, I supported SQL extraction, transformation, and reconciliation workflows for campaign and operational datasets used in BI and ad-hoc analysis. This role helped me build strong fundamentals in data cleaning, metric consistency, and validation before reporting.",
    detail:
      "I contributed Python-based cleaning scripts, supported Power BI and Tableau data pipelines, and documented transformation and validation logic so analytics delivery remained stable, repeatable, and easier for teams to maintain.",
    tags: ["Python", "SQL", "Power BI", "Tableau", "Data Quality"],
  },
];

const projects = [
  {
    title: "Customer Complaints Resolution Dashboard",
    period: "Jan 2025 - May 2025",
    summary:
      "Built an ML-based classification and BI workflow to categorize customer issues and surface multi-channel service trends.",
    metric: "95% Accuracy",
    tech: ["Python", "Power BI", "DAX", "Machine Learning"],
  },
  {
    title: "Predicting Heart Disease Risk",
    period: "May 2024 - Jul 2024",
    summary:
      "Developed machine learning models using feature engineering, class balancing, Logistic Regression, and SVC to improve risk prediction quality.",
    metric: "ML Modeling",
    tech: ["Python", "Logistic Regression", "SVC", "Sklearn"],
  },
  {
    title: "Cardiovascular & Sleep Health Analysis",
    period: "Jan 2024 - May 2024",
    summary:
      "Analyzed health and sleep datasets to uncover relationships between physical activity, rest patterns, and cardiovascular indicators.",
    metric: "EDA + Insights",
    tech: ["Python", "SQL", "EDA", "Visualization"],
  },
  {
    title: "Short-Term Electrical Load Forecasting",
    period: "Dec 2022 - Jun 2023",
    summary:
      "Built an ANN-based load forecasting model that improved planning reliability and delivered 3.14% MAPE for proactive distribution decisions.",
    metric: "3.14% MAPE",
    tech: ["MATLAB", "ANN", "Forecasting"],
  },
];

const skillGroups = [
  {
    title: "Data Engineering",
    items: ["SQL", "Python", "ETL / ELT", "Airflow", "dbt-style transformations", "Data modeling"],
  },
  {
    title: "Cloud & Warehousing",
    items: ["Snowflake", "Azure Synapse", "AWS Redshift", "Azure SQL", "Databricks", "AWS"],
  },
  {
    title: "Quality & Governance",
    items: ["Great Expectations", "Validation frameworks", "Anomaly detection", "Data lineage", "QA rules", "Documentation"],
  },
  {
    title: "Analytics & BI",
    items: ["Power BI", "Tableau", "Excel", "Forecasting", "Experimentation", "Media analytics"],
  },
];

const credentials = [
  {
    label: "Education",
    title: "Clark University",
    text: "Master of Science in Data Analytics",
    meta: "Worcester, MA | Jan 2024 - May 2025",
  },
  {
    label: "Education",
    title: "Sir Padampat Singhania University",
    text: "Bachelor's in Computer Science",
    meta: "Hyderabad, India | Jun 2018 - Jun 2022",
  },
  {
    label: "Publication",
    title: "Cryptocurrency Fluctuation Research",
    text: "Predicting and Enhancing the Fluctuations of Cryptocurrency using algorithms.",
    meta: "Research publication",
    href: "https://www.ijaresm.com/uploaded_files/document_file/Ayush_RaizadawDFH.pdf",
    linkText: "Open publication",
  },
  {
    label: "Certification",
    title: "Microsoft Azure Fundamentals",
    text: "AZ-900 certification validating cloud and Azure fundamentals.",
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
        rootMargin: "0px 0px -48px 0px",
      }
    );

    nodes.forEach((node, index) => {
      node.style.transitionDelay = `${Math.min(index * 55, 260)}ms`;
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
            <p className="eyebrow">Data Engineer | Analytics Engineer | SQL, Python, Snowflake</p>
            <h1>
              Building reliable analytics systems for <span>cleaner decisions</span>.
            </h1>
            <p className="hero-text">
              I&apos;m Bhargav Kodaru, a data engineer and analytics engineer with 4+ years of
              experience designing ETL pipelines, QA-first data workflows, and cloud-based
              analytics foundations across operations, marketing, and reporting environments.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a
                className="button button-secondary"
                href={`${import.meta.env.BASE_URL}Bhargav_Kodaru_Resume_Updated.docx`}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
              <a className="button button-secondary" href="mailto:bhargav.kodaru@gmail.com">
                Email Me
              </a>
            </div>
          </div>

          <aside className="hero-panel reveal">
            <div className="hero-panel-copy">
              <p className="panel-kicker">Current Focus</p>
              <h2>Analytics-ready data models, validation, and scalable pipeline design</h2>
              <ul className="signal-list">
                <li>SQL and Python pipeline design for multi-source business datasets</li>
                <li>Great Expectations and QA-first validation frameworks</li>
                <li>Cloud analytics patterns across Snowflake, Azure, and AWS</li>
              </ul>
            </div>
            <div className="hero-stat-grid">
              {metrics.map((metric) => (
                <div className="metric-tile" key={metric.label}>
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy reveal">
            <p className="section-label">About Me</p>
            <h2>
              Data engineering discipline with a strong analytics and validation mindset.
            </h2>
            <p>
              I specialize in SQL- and Python-driven pipelines that transform raw, distributed
              business data into clean, validated, analytics-ready assets. My recent work has
              focused on building scalable ETL workflows, optimizing query performance, and
              delivering reliable data products for reporting, forecasting, and experimentation.
            </p>
            <p>
              My background spans Snowflake-style warehousing, cloud analytics ecosystems,
              data quality frameworks, and business-facing BI delivery. I care deeply about
              pipeline clarity, consistent metric definitions, and making data trustworthy before
              it reaches dashboards, models, or decision-makers.
            </p>
            <p>
              Outside of engineering work, I enjoy designing polished data stories, improving
              analytics usability, and building portfolio projects that translate technical depth
              into clear business impact.
            </p>
            <div className="tag-row">
              {aboutTags.map((tag) => (
                <span className="tag-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="about-photo-card reveal">
            <div className="photo-frame">
              <img
                src={`${import.meta.env.BASE_URL}bhargav-kodaru-profile.png`}
                alt="Bhargav Kodaru"
              />
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="section-label">Professional Journey</p>
            <h2>
              Experience shaped around <span>analytics engineering</span>, QA, and scalable data systems.
            </h2>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card reveal" key={`${item.company}-${item.role}`}>
                <div className="experience-main">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-company">
                      {item.company}, <span>{item.period}</span>
                    </p>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                  <p className="experience-summary">{item.detail}</p>
                  <div className="chip-row">
                    {item.tags.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="experience-metric">
                  <strong>{item.metric}</strong>
                  <span>{item.metricLabel}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="section-label">Projects</p>
            <h2>
              Internships, academic work, and portfolio projects with <span>clear business outcomes</span>.
            </h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-icon"></div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="chip-row compact">
                  {project.tech.map((item) => (
                    <span className="chip small" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  <span>{project.metric}</span>
                  <span>{project.period}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading reveal">
            <p className="section-label">Skills</p>
            <h2>
              Technical strengths across warehousing, transformation, quality, and analytics.
            </h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip small" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials-section">
          {credentials.map((item) => (
            <article className="credential-card reveal" key={item.title}>
              <p className="section-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>{item.meta}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.linkText}
                </a>
              ) : null}
            </article>
          ))}
        </section>

        <section className="section contact-section reveal" id="contact">
          <p className="section-label">Contact</p>
          <h2>Open to data engineering and analytics engineering opportunities.</h2>
          <p>
            If you&apos;re hiring for data platform, analytics engineering, BI, or pipeline-focused
            roles, I&apos;d be glad to connect.
          </p>
          <div className="hero-actions">
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
